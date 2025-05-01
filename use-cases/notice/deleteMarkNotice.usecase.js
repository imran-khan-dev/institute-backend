import Notice from "../../entities/Notice.js";

export const deleteMarkNoticeUseCase = async (ids) => {
  return await Notice.deleteMany({ _id: { $in: ids } });
};
