const express = require("express");
const router = express.Router();
const Database = require("../database/drivpass");

router

    .get("/:id", async (req, res) => {
        try {
            const user_id = req.params.id
            const drivpass = await Database.selectById(user_id);
            if (drivpass == null) return res.status(200).json({ success: false, message: "User doesn´t exist" });
            
            const history = await Database.selectHistoryPayment(user_id);

            return res.status(200).json({ history_payment: history })

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

module.exports = router;
