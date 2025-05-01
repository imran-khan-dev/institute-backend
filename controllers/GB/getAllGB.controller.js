import { getAllGBMembersUseCase } from "../../use-cases/GB/getAllGBMembers.usecase.js";

export const getAllGBMembersController = async (req, res) => {
  try {
    const members = await getAllGBMembersUseCase();
    res.json(members);
  } catch (error) {
    console.error("Error in controller:", error);
    res.status(500).json({
      message: "Error fetching governing body members",
      error: error.message,
    });
  }
};
