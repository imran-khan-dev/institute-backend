import { updatedNoticeUseCase } from "../../use-cases/notice/updateNotice.usecase.js";

export const updateNoticeController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const { description } = req.body;
    const fileUrl = req.file ? req.file.path : undefined;

    const updatedNotice = await updatedNoticeUseCase({
      id,
      title,
      fileUrl,
      description,
    });
    res.json(updatedNotice);
  } catch (error) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error updating notice",
      error: error.message,
    });
  }
};
