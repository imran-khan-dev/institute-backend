import { addInstituteCodeUseCase } from "../../use-cases/instituteCode/addInstituteCode.usecase.js";

export const addInstituteCodeController = async (req, res) => {
  try {
    const { eIINNum, instituteCode, regNum } = req.body;

    const newCodeDetails = addInstituteCodeUseCase({
      eIINNum,
      instituteCode,
      regNum,
    });
    res.status(200).json(newCodeDetails);
    console.log(newCodeDetails);
  } catch (err) {
    console.error("Error in controller:", err);
    res.status(500).json({
      message: "Error adding Institute Code Details",
      error: err.message,
    });
  }
};
