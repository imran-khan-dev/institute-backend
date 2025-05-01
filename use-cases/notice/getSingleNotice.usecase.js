import Notice from "../../entities/Notice.js";

export const getSingleNoticeUseCase = async (id) => {
  const notice = Notice.findById(id);
  return notice;
};
