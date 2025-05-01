import AboutInstitute from "../../entities/AboutInstitute.js";

export const getAboutInstituteUseCase = async () => {
  return await AboutInstitute.find();
};
