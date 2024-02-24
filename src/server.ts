import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/api", (req: Request, res: Response, next: NextFunction) =>
{
    res.send("Hello");
});

app.listen("3000", () =>
{
    console.log("Server listening on port 3000 (ts)");
});