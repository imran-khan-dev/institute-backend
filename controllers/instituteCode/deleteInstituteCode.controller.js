import InstituteCode from "../../entities/InstituteCode.js";

export const deleteInstituteCodeController = async (req, res) => {
  try {
    await InstituteCode.deleteMany({});

    res.status(200).json({ message: "Institute Code All Deleted" });
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({ message: "Error deleting institute code", err });
  }
};
