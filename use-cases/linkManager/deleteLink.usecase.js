import LinkManager from "../../entities/LinkManager.js";

export const deleteLinkUseCase = async (id) => {
  return await LinkManager.findByIdAndDelete(id);
};
