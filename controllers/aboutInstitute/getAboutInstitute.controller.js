import { getAboutInstituteUseCase } from "../../use-cases/aboutInstitute/getAboutInstitute.usecase.js";

export const getAboutInstituteController = async (req, res) => {
  try {
    const result = await getAboutInstituteUseCase();
    res.json(result);
  } catch (err) {
    console.error("Error in controller:", err);
    res
      .status(500)
      .json({ error: "Failed to fetch About Details of Institute" });
  }
};
