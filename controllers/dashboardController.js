const getDashboard = (req, res) => {
    res.render("dashboard", {
        pageTitle: "Dashboard",
        layout: "layouts/layout",
    });
};

export { getDashboard };
