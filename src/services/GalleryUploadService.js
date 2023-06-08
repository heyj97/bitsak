const Gallery = require('../models/GalleryUploadModel');

const uploadGallery = async (data) => {
  const { author, description, location, take_date, photoPath } = data;

  try {
    const gallery = new Gallery({
      author,
      description,
      photo: photoPath,
      location,
      take_date,
      post_date: new Date()
    });

    await gallery.upload();

    return {
      isSuccess: true,
      code: 200
    };
  } catch (error) {
    console.error(error);
    return {
      isSuccess: false,
      code: 500,
      error: 'Internal Server Error'
    };
  }
};

module.exports = {
  uploadGallery
};