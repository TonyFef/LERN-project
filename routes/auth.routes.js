const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const router = Router();
const db = require("../app.js");

function User(email, password) {
    (this.email = email), (this.password = password);
}

// /api/auth/register
// router.post(
//     "/register",
//     [check("email", "Invalid email").isEmail(), check("password", "Password's min length - 6").isLength({ min: 6 })],
//     async (req, res) => {
//         try {
//             // console.log(req.body);
//             const errors = validationResult(req);

//             if (!errors.isEmpty()) {
//                 return res.status(400).json({ errors: errors.array(), message: "Invalid user data" });
//             }

//             usersArr.push(req.body);
//             console.log(usersArr);

//             const { email, password } = req.body;

//             const candidate = await usersArr.find({ email });

//             if (candidate) {
//                 return res.status(400).json({ message: "Such user is excisting " });
//             }

//             const hashedPassword = await bcrypt.hash(password, 12);
//             const user = new User({ email, password: hashedPassword });

//             await user.save();

//             res.status(201).json({ message: "User has been created!" });
//         } catch (e) {
//             console.log(e);
//             res.status(500).json({ message: "Something has gone wrong, try again" });
//         }
//     }
// );

// /api/auth/login
router.post(
    "/login",
    [check("email", "Enter correct email").normalizeEmail().isEmail(), check("password", "Enter password").exists()],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: "Invalid user data while entering" });
            }

            const { email, password } = req.body;

            const user = db.get("users").find({ email }).value();

            if (!user) {
                return res.status(400).json({ message: "User is not defined" });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: "Invalid data..." });
            }

            const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), { expiresIn: "10h" });

            res.json({ token, userId: user.id });
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "Something has gone wrong, try again" });
        }
    }
);

module.exports = router;
