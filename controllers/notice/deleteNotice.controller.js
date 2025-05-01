import { deleteNoticeUseCase } from "../../use-cases/notice/deleteNotice.usecase.js";

export const deleteNoticeController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNotice = deleteNoticeUseCase(id);
    if (!deletedNotice) {
      return res.status(404).json({ message: "Notice not found" });
    }
    res.json({ message: "Notice deleted successfully" });
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error deleting Notice",
      error: err.message,
    });
  }
};
