const getAttendance = (req, res) => {
    res.render("attendance/index", {
        pageTitle: "Attendance",
        layout: "layouts/layout",
    });
};

export { getAttendance };
