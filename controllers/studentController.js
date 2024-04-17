const getStudents = (req, res) => {
    res.render("students/index", {
        pageTitle: "Students",
        layout: "layouts/layout",
    });
};

const getNewStudent = (req, res) => {
    res.render("students/new", {
        pageTitle: "New Student",
        layout: "layouts/layout",
    });
};

export { getStudents, getNewStudent };
