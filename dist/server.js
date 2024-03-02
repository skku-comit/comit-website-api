"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const dotenv_1 = __importDefault(require("dotenv"));
const passport_1 = __importDefault(require("passport"));
const index_1 = __importDefault(require("./passport/index"));
const auth_1 = __importDefault(require("./routes/auth"));
dotenv_1.default.config();
(0, index_1.default)();
const app = (0, express_1.default)();
app.set("port", process.env.PORT || 3000);
app.use((req, res, next) => {
    if (process.env.NODE_ENV === "production") {
        (0, morgan_1.default)("combined")(req, res, next);
    }
    else {
        (0, morgan_1.default)("dev")(req, res, next);
    }
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)(process.env.COOKIE_SECRET));
app.use((0, express_session_1.default)({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET || "",
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: "comit-session-cookie",
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.get("/api", (req, res, next) => {
    res.send("Hello");
});
app.use("/auth", auth_1.default);
app.use((err, req, res, next) => {
    res.locals.message = err === null || err === void 0 ? void 0 : err.message;
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
    res.status((err === null || err === void 0 ? void 0 : err.status) || 500);
    return res.send("error");
});
app.listen("3000", () => {
    console.log("Server listening on port 3000");
});
