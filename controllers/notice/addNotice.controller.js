import { addNoticeUseCase } from "../../use-cases/notice/addNotice.usecase.js";

export const addNoticeController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }
    const title = req.body.title;
    const description = req.body.description;
    const fileUrl = req.file.path;

    const newNotice = await addNoticeUseCase({ title, description, fileUrl });

    res.json(newNotice);
    console.log(newNotice);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error adding new Notice",
      error: err.message,
    });
  }
};
