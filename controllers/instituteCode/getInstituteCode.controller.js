import { getInstituteCodeUseCase } from "../../use-cases/instituteCode/getInstituteCode.usecase.js";

export const getInstituteCodeController = async (req, res) => {
  try {
    const result = await getInstituteCodeUseCase();
    res.json(result);
  } catch (err) {
    console.error("Error in controller:", err);
    res
      .status(500)
      .json({ error: "Failed to fetch About Details of Institute" });
  }
};
