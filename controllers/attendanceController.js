const getTimeRecords = (req, res) => {
    res.render("attendance/timeRecords", {
        pageTitle: "Time Records",
        layout: "layouts/layout",
    });
};

const getAttendance = (req, res) => {
    res.render("attendance/index", {
        pageTitle: "Attendance",
        layout: "layouts/layout",
    });
};

export { getTimeRecords, getAttendance };
