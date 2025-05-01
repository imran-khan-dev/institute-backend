import GoverningBodyMember from "../../entities/GoverningBody.js";

export const getAllGBMembersUseCase = async () => {
  return await GoverningBodyMember.find();
};
