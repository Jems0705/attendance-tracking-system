const getClasses = (req, res) => {
    res.render("classes/index", {
        pageTitle: "Classes",
        layout: "layouts/layout",
    });
};

const getNewClass = (req, res) => {
    res.render("classes/new", {
        pageTitle: "New Classs",
        layout: "layouts/layout",
    });
};

export { getClasses, getNewClass };
