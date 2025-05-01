import Notice from "../../entities/Notice.js";

export const updatedNoticeUseCase = async ({
  id,
  title,
  fileUrl,
  description,
}) => {
  const notice = await Notice.findById(id);

  if (!notice) {
    throw new Error("Notice not found");
  }

  if (title) {
    notice.title = title;
  }

  if (description) {
    notice.description = description;
  }

  if (fileUrl) {
    notice.fileUrl = fileUrl;
  }

  await notice.save();

  return notice;
};
