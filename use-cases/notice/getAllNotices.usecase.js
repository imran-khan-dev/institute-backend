import Notice from "../../entities/Notice.js";

export const getAllNoticesUseCase = async ({ page, limit }) => {
  const skip = (page - 1) * limit;

  const total = await Notice.countDocuments();
  const notices = await Notice.find()
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  return {
    notices,
    totalPages: Math.ceil(total / limit),
  };
};
