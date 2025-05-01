import { addGBMemberUseCase } from "../../use-cases/GB/addGBMember.usecase.js";

export const addGBMemberController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded." });
    }

    const { title, description } = req.body;
    const imageUrl = req.file.path; 

    const newMember = await addGBMemberUseCase({
      title,
      description,
      imageUrl,
    });

    res.status(201).json(newMember);
  } catch (error) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error adding governing body member",
      error: error.message,
    });
  }
};
