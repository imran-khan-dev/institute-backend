import InstituteCode from "../../entities/InstituteCode.js";

export const addInstituteCodeUseCase = async ({
  eIINNum,
  instituteCode,
  regNum,
}) => {
  const newInstituteCode = new InstituteCode({
    eIINNum,
    instituteCode,
    regNum,
  });

  await newInstituteCode.save();
  return newInstituteCode;
};
