import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import expressEjsLayouts from "express-ejs-layouts";

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
app.get("/attendance", (req, res) => {
    res.render("attendance", {
        pageTitle: "Attendance",
        layout: "layouts/layout",
    });
});

app.get("/sign-in", (req, res) => {
    res.render("auth/signin");
});
app.get("/sign-up", (req, res) => {
    res.render("auth/signup");
});

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
