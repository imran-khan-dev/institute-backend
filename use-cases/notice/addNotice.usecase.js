import Notice from "../../entities/Notice.js";

export const addNoticeUseCase = async ({ title, description, fileUrl }) => {
  const newNotice = new Notice({
    resource_type: "auto",
    title,
    description,
    fileUrl,
  });

  await newNotice.save();
  return newNotice;
};
