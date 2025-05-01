import { getSingleNoticeUseCase } from "../../use-cases/notice/getSingleNotice.usecase.js";

export const getSingleNoticeController = async (req, res) => {
  const id = req.params.id;
  try {
    const notice = await getSingleNoticeUseCase(id);
    res.json(notice);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({ error: "Failed to fetch notice" });
  }
};
