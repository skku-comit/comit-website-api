import passport from "passport";
import local from "./localStrategy";
import CoMitUser from "../schema/user";

const passportAuth = () =>
{
    passport.serializeUser((user: Express.User, done) =>
    {
        done(null, user.id);
    });

    passport.deserializeUser<number>(async (id: number, done) =>
    {
        try
        {
            const user = await CoMitUser.findOne({ id: id });
            done(null, user);
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