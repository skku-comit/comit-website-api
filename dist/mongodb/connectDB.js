"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// declare global
// {
//     var mongoose:
//     {
//         promise: Promise<Mongoose> | null;
//         connection: Mongoose | null;
//     };
// }
const URI = process.env.MONGODB_URL;
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { connection: null, promise: null };
}
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    if (cached.connection)
        return cached.connection;
    try {
        if (!cached.promise) {
            cached.promise = mongoose_1.default
                .set({ debug: true, strictQuery: false })
                .connect(`${URI}`)
                .then((mongoose) => mongoose);
        }
        cached.connection = yield cached.promise;
        console.log("Connected to MongoDB");
        return cached.connection;
    }
    catch (error) {
        console.log("Failed to connect to MongoDB");
        console.error(error);
    }
});
exports.default = connectDB;
