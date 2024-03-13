import { Request, Response, NextFunction } from "express";
import connectDB from "../mongodb/connectDB";
import CoMitUser from "../models/user";

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await connectDB();
        const { email } = req.params;
        const user = await CoMitUser.findOne({ email });

        if (user.isAdmin) {
            res.locals.isAdmin = true;
            next();
        }
        else {
            return res.status(403).json({ message: "Invalid access" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default isAdmin;