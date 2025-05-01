import Notice from "../../entities/Notice.js";

export const deleteNoticeUseCase = async (id) => {
  return await Notice.findByIdAndDelete(id);
};
