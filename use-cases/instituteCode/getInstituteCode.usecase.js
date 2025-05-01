import InstituteCode from "../../entities/InstituteCode.js";

export const getInstituteCodeUseCase = async () => {
  return await InstituteCode.find();
};
