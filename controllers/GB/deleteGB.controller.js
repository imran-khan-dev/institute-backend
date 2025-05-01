import {deleteGBMemberUseCase} from "../../use-cases/GB/deleteGBMember.usecase.js"

export const deleteGBMemberController = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedMember = await deleteGBMemberUseCase(id)
      if (!deletedMember) {
        return res.status(404).json({ message: "Member not found" });
      }
      res.json({ message: "Governing body member deleted successfully" });
    } catch (err) {
      console.error("Error in controller:", err);
      res.status(500).json({
        message: "Error deleting governing body member",
        error: err.message,
      });
    }
  };