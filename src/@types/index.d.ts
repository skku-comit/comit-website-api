import { isExpression } from "typescript";
import CoMitUser from "../schema/user";

declare global
{
    namespace Express
    {
        interface User {
            id?: number;
        }
        interface User extends CoMitUser {};
    }
}