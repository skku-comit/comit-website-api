import passport from "passport";
import * as localStrategy from "passport-local"
import bcrypt from "bcrypt";

import CoMitUser from "../schema/user";

const local = () =>
{
    passport.use(new localStrategy.Strategy({
        usernameField: "email",
        passwordField: "passwowrd",
        passReqToCallback: false,
    }, async (email: string, password: string, done) =>
    {
        try
        {
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
        catch (err)
        {
            console.error(err);
            done(err);
        }
    }))
}

export default local;