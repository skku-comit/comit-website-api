import passport from "passport";
import * as localStrategy from "passport-local"
import bcrypt from "bcrypt";
import connectDB from "../mongodb/connectDB";
import CoMitUser from "../models/user";

const local = () =>
{
    passport.use(new localStrategy.Strategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: false,
    }, async (email: string, password: string, done) =>
    {
        try
        {
            await connectDB();
            const user = await CoMitUser.findOne({ email });
            if (user)
            {
                const compare = await bcrypt.compare(password, user.password);
                if (compare)
                {
                    done(null, user);
                }
                else
                {
                    done(null, false, { message: "Incorrect password" });
                }
            }
            else
            {
                done(null, false, { message: "User not in database" });
            }
        }
        catch (error)
        {
            console.error(error);
            done(error);
        }
    }));
}

export default local;