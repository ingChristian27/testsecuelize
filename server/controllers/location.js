
const Database = require("../database/location");
const DatabaseDrivpass = require("../database/drivpass");
await function post(req, res){
    try {
        const params = req.body;
        if (!params.email) return res.status(404).json({ details: "email required!" });
        const drivpass = await DatabaseDrivpass.selectByEmail(params.email);
        if (drivpass == null) return res.status(404).json({ details: "user not found" });
        const id_drivpass = drivpass.id;
        const location = await Database.selectById(id_drivpass);
        if (location == 0) {
            const parameters = {
                id_user: id_drivpass,
                user_type: params.user_type,
                latitude: params.latitude,
                longitude: params.longitude
            }

            const post = await Database.insert( parameters);
            return res.status(200).json({ success: true, message: "Location created!", insertId: post.id });

        } else {
            const id_location = location.id;
            const parameters = {
                id_user: id_drivpass,
                user_type: params.user_type.toString() || location.user_type.toString(),
                latitude: params.latitude || location.latitude,
                longitude: params.longitude || location.longitude,
                status: params.status || location.status
            }
            
            const put = await Dastabase.update( parameters, id_location);
            return res.status(200).json({ success: true, message: "Location updated!" });
        }

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "{'error':'Error inesperado. '}"
        });
    }
}

exports.post = post