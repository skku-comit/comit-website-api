import { isExpression } from "typescript";
import CoMitUser from "../models/user";

declare global
{
    namespace Express
    {
        interface User {
            userName: string;
            email: string;
            id: number;
        }

        interface Session {
            user?: User;
        }
    }

    namespace session
    {
        interface Session {
            user?: User;
        }
    }
}