import { RequestHandler, Request, Response, NextFunction } from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import CoMitUser from "../models/user";

const signup: RequestHandler = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const user = await CoMitUser.findOne({ email: req.body.email });
        if (user)
        {
            return res.status(403);
        }
        const { email, password, userName, studentID } = req.body;
        const id = Date.now();
        const hashedPW = bcrypt.hash(password, 15);
        await CoMitUser.create({
            id,
            email,
            password: hashedPW,
            userName,
            studentID,
            isAdmin: false,
        });
        return res.status(201).json({ message: 0 });
    }
    catch (error)
    {
        console.error(error);
        next(error);
    }
}

const login: RequestHandler = async (req: Request, res: Response, next: NextFunction) =>
{
    try {
        passport.authenticate("local", { failureRedirect: "/auth/login" }, (authError: Error|any, user: Express.User, info: any) =>
        {
            console.log(info || "no info");
            if (authError)
            {
                console.error(authError);
                next(authError);
            }
            if (!user)
            {
                return res.status(403);
            }
            return req.login(user, (loginError) =>
            {
                if (loginError)
                {
                    console.error(loginError);
                    next(loginError);
                }
                return;
            });
        })(req, res, next);
    } catch (error) {
        console.error(error);
    }
}

const logout = (req: Request, res: Response, next: NextFunction) =>
{
    req.logout((error) =>
    {
        if (error)
        {
            console.error(error);
            next(error);
        }
    });

    req.session.save((error) => {
        if (error)
        {
            console.error(error);
            next(error);
        }
        res.redirect("/");
    });
}

export { signup, login, logout };