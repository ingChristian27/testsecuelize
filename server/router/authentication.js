const express = require("express");
const router = express.Router();
const Database = require("../database/drivpass");
router


    /**
        * @api {post} /login Login
        * @apiName Login
        * @apiGroup Authentication
        *
        * @apiParam {String} email Users email.
        * @apiParam {String} password Users password.
        *
        * @apiSuccess {String} firstname Firstname of the User.
        * @apiSuccess {String} lastname  Lastname of the User.
    */
    .post("/", async (req, res) => {
        try {
            console.log("login/");
            console.log(req.body);

            const { email, password } = req.body;




            if (!email || !password) return res.status(400).send({ message: 'email and password are required' });

            const user = await Database.selectByEmail(email);
            console.log(user)
            if (!user || user.length == 0) return res.status(403).json({ message: 'User doesn´t exist!' });

            const passw = await Database.selectByEmailAndPassword(email, password);
            if (!passw || passw.length == 0) return res.status(404).json({ message: 'Incorrect password!' });

            const id = user.id;
            const status_profile = user.status_profile;
            const access_token = 'TEST123';

            return res.json({ access_token, user_id: id, status_profile: status_profile });

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })



module.exports = router;
