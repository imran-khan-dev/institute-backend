import MediaGalleryImage from "../../entities/MediaGalleryImage.js";

export const deleteMarkImagesController = async (req, res) => {
  try {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res
        .status(400)
        .json({ error: "Invalid request. No IDs provided." });
    }

    const result = await MediaGalleryImage.deleteMany({ _id: { $in: ids } });

    if (result.deletedCount > 0) {
      return res.status(200).json({ message: "Images deleted successfully" });
    } else {
      return res.status(404).json({ error: "No image found to delete" });
    }
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error deleting Images",
      error: err.message,
    });
  }
};
