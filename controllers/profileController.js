const getProfile = (req, res) => {
    res.render("profile/index", {
        pageTitle: "Profile",
        layout: "layouts/layout",
    });
};

export { getProfile };
