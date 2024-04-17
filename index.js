import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import expressEjsLayouts from "express-ejs-layouts";
import jwt from "jsonwebtoken";
import session from "express-session";

import connectDB from "./config/db.js";

import dotenv from "dotenv";
dotenv.config();

// Routes
import dashboardRoutes from "./routes/dashboardRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import classRoutes from "./routes/classRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

global.basePartialsDir = path.join(__dirname, "views", "partials");

const app = express();

// View Engine
app.set("views", path.join(__dirname, "views"));
app.use(expressEjsLayouts);
app.set("view engine", "ejs");

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(
    session({
        secret: process.env.JWT_SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "Home",
        layout: "layouts/layout",
    });
});
app.use("/dashboard", dashboardRoutes);
app.use("/students", studentRoutes);
app.use("/classes", classRoutes);
app.use("/profile", profileRoutes);
app.use("/attendance", attendanceRoutes);

app.get("/404", (req, res) => {
    res.send("Not Found");
});

app.get("/sign-in", (req, res) => {
    res.render("auth/signin", { pageTitle: "Sign in" });
});
app.post("/sign-in", async (req, res) => {
    try {
        const user = { id: 1, name: "Test" };
        const body = req.body;

        console.log("body", body);

        const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);
        req.session.token = token;

        res.redirect("/dashboard");
    } catch (err) {
        console.error(err);
    }
});

app.get("/sign-up", (req, res) => {
    res.render("auth/signup");
});

app.post("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/sign-in");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);

    await connectDB();
});
