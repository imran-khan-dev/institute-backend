import GoverningBodyMember from "../../entities/GoverningBody.js";

export const updateGBMemberUseCase = async ({
  id,
  title,
  description,
  imageUrl,
}) => {
  if (!id) throw new Error("Member ID is required");

  const updateFields = {};

  if (title !== undefined && title !== "") updateFields.title = title;
  if (description !== undefined && description !== "")
    updateFields.description = description;
  if (imageUrl) updateFields.imageUrl = imageUrl;

  const updatedMember = await GoverningBodyMember.findByIdAndUpdate(
    id,
    { $set: updateFields },
    { new: true, runValidators: true }
  );

  if (!updatedMember)
    throw new Error(`Governing body member with ID ${id} not found`);

  return updatedMember;
};
