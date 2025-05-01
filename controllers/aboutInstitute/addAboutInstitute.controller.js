import { addAboutUseCase } from "../../use-cases/aboutInstitute/addAboutInstitute.usecase.js";

export const addAboutController = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }

    const newAbout = addAboutUseCase({ title, description });
    res.status(200).json(newAbout);
    console.log(newAbout);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error adding About Details",
      error: err.message,
    });
  }
};
