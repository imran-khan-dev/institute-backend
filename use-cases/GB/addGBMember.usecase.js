import GoverningBodyMember from "../../entities/GoverningBody.js";

export const addGBMemberUseCase = async ({
  title,
  description,
  imageUrl,
}) => {
  try {
    const newMember = new GoverningBodyMember({ title, description, imageUrl });
    return await newMember.save();
  } catch (error) {
    throw new Error(`Failed to add member: ${error.message}`);
  }
};
