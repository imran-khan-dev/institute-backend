import { updateGBMemberUseCase } from "../../use-cases/GB/updateGBMember.usecase.js";

export const updateGBMemberController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const imageUrl = req.file ? req.file.path : undefined;

    const updatedMember = await updateGBMemberUseCase({
      id,
      title,
      description,
      imageUrl,
    });

    res.json(updatedMember);
  } catch (error) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error updating governing body member",
      error: error.message,
    });
  }
};
