async function add(req, res) {
  try {
    var path;
    var resource;
    if (req.files != undefined) {
      if (req.files.image) {
        path = req.files.image.path;
        resource = "image";
      }
      if (req.files.video) {
        path = req.files.video.path;
        resource = "video";
      }
    }

    if (req.file != undefined) {
      if (req.file.image) {
        path = req.file.image.path;
        resource = "image";
      }
      if (req.file.video) {
        path = req.file.video.path;
        resource = "video";
      }
    }

    const result = await cloudinary.v2.uploader.upload(path, {
      resource_type: resource
    });
    return res.status(200).json({ url: result.url });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}
exports.add = add;
