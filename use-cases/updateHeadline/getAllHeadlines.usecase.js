import UpdateHeadlines from "../../entities/UpdateHeadlines.js";

export const getAllHeadlinesUseCase = async () => {
  return await UpdateHeadlines.find();
};
