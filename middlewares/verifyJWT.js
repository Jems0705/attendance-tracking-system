import jwt from "jsonwebtoken";

const verifyJWT = async (req, res, next) => {
    try {
        const token = req.session.token;
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.redirect("/");
                }
                req.user = decoded;
                next();
            });
        } else {
            res.redirect("/sign-in");
        }
    } catch (err) {
        console.error(err);
    }
};

export { verifyJWT };
