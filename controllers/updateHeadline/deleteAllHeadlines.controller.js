import UpdateHeadline from "../../entities/UpdateHeadlines.js";

export const deleteAllHeadlines = async (req, res) => {
  try {
    await UpdateHeadline.deleteMany({});
    res.status(200).json({ message: "All headlines deleted successfully." });
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({ error: "Failed to delete headlines." });
  }
};
