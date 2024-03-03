import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import passport from "passport";
import * as path from "path";
import passportAuth from "./passport/index";

import authRouter from "./routes/auth";

dotenv.config();
passportAuth();
const app = express();
app.set("port", process.env.PORT || 3000);

app.use((req: Request, res: Response, next: NextFunction) =>
{
    if (process.env.NODE_ENV === "production")
    {
        morgan("combined")(req, res, next);
    }
    else 
    {
        morgan("dev")(req, res, next);
    }
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET || "",
    cookie:
    {
        httpOnly: true,
        secure: false,
    },
    name: "comit-session-cookie",
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/api", (req: Request, res: Response, next: NextFunction) =>
{
    res.send("Hello");
});

app.use("/auth", authRouter);


app.use((err: any, req: Request, res: Response, next: NextFunction) =>
{
    res.locals.message = err?.message;
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
    res.status(err?.status || 500);
    return res.send("error");
})

app.listen("3000", () =>
{
    console.log("Server listening on port 3000");
});