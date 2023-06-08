const uploadService = require('../services/GalleryUploadServices');

const uploadGallery = async (req, res) => {
  const { author, description, location, take_date } = req.body;
  const photoPath = req.file.path;

  const result = await uploadService.uploadGallery({
    author,
    description,
    location,
    take_date,
    photoPath
  });

  if (result.isSuccess) {
    res.json(result);
  } else {
    res.status(result.code).json(result);
  }
};

module.exports = {
  uploadGallery
};