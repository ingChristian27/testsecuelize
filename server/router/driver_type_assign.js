const express = require("express");
const router = express.Router();
const Database = require("../database/driver_type_assign");
const DatabaseDrivpass = require("../database/drivpass");
router

    .post("/add/:id", async (req, res) => {
        try {
            const id = req.params.id;
            let types_assign = [];
            const drivpass = await DatabaseDrivpass.selectById(id);
            console.log(drivpass)
            if(drivpass == null) return res.status(204).json({message: "user not found"});
            for(var i in req.body){
                types_assign.push({id_driver: drivpass.id ,id_driver_type: req.body[i].driver_type});
            }
            const assign = await Database.insertBulk(types_assign);
            return res.status(200).json({success: true, message: "Driver types created!"});

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })



module.exports = router;
