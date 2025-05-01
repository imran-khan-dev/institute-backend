import { addLinkUseCase } from "../../use-cases/linkManager/addLink.usecase.js";

export const addLinkController = async (req, res) => {
  try {
    const { title, url } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    if (!url) {
      return res.status(400).json({ error: "Url is required" });
    }

    const link = addLinkUseCase({ title, url });
    res.status(200).json(link);
    console.log(link);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error adding new link",
      error: err.message,
    });
  }
};
