import { RequestHandler, Request, Response, NextFunction } from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import CoMitUser from "../schema/user";

const signIn: RequestHandler = async (req: Request, res: Response, next: NextFunction) =>
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
        });
        return res.status(201).json({ message: 0 });
    }
    catch (err)
    {
        console.error(err);
        return next(err);
    }
}

const login: RequestHandler = async (req: Request, res: Response, next: NextFunction) =>
{
    passport.authenticate("local", (authError: Error|any, user: Express.User, info: any) =>
    {
        if (authError)
        {
            console.error(authError);
            return next(authError);
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
                return next(loginError);
            }
            return;
        });
    })(req, res, next);
}

export { signIn, login };