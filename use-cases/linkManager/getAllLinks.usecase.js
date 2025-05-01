import LinkManager from "../../entities/LinkManager.js";

export const getAllLinksUseCase = async () => {
  return await LinkManager.find();
};
