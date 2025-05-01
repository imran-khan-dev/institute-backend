import UpdateHeadline from "../../entities/UpdateHeadlines.js";

export const addUpdateHeadlineUseCase = async ({ headline }) => {
  const newUpdateHeadline = new UpdateHeadline({
    headline,
  });

  await newUpdateHeadline.save();
  return newUpdateHeadline;
};
