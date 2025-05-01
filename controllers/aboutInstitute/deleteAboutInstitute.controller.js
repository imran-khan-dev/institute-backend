import AboutInstitute from "../../entities/AboutInstitute.js";

export const deleteAboutController = async (req, res) => {
  try {
    await AboutInstitute.deleteMany({});
    res.status(200).json({ message: "About deleted successfully." });
  } catch (error) {
    console.error("Error in controller:", err);
    res.status(500).json({ error: "Failed to delete About." });
  }
};
