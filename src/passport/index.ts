import passport from "passport";
import local from "./localStrategy";
import CoMitUser from "../models/user";
import connectDB from "../mongodb/connectDB";

const passportAuth = () =>
{
    passport.serializeUser((user: Express.User, done) =>
    {
        done(null, user.email);
    });

    passport.deserializeUser<string>(async (email: string, done) =>
    {
        try
        {
            await connectDB();
            const user = await CoMitUser.findOne({ email });
            if (user) {
                done(null, user);
            }
            else {
                done(new Error("failed to find user"), false);
            }
        }
        catch (err)
        {
            console.error(err);
            done(err);
        }
    });

    local();
}

export default passportAuth;