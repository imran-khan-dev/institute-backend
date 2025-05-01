import AboutInstitute from "../../entities/AboutInstitute.js";

export const addAboutUseCase = async ({ title, description }) => {
  const newAboutInstitute = new AboutInstitute({
    title,
    description,
  });

  await newAboutInstitute.save();
  return newAboutInstitute;
};
