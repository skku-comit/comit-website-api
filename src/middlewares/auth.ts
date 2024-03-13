import { RequestHandler, Request, Response, NextFunction } from "express";

const isLoggedIn: RequestHandler = (req: Request, res: Response, next: NextFunction) =>
{
    if (req.isAuthenticated())
    {
        next();
    }
    else
    {
        res.status(403).json({ message: "Log In required" });
    }
}

const isNotLoggedIn: RequestHandler = (req: Request, res: Response, next: NextFunction) =>
{
    if (!req.isAuthenticated())
    {
        next();
    }
    else
    {
        const message = encodeURIComponent("Already logged in");
        res.redirect(`/?error=${message}`);
    }
}

export { isLoggedIn, isNotLoggedIn };