import GoverningBodyMember from "../../entities/GoverningBody.js";

export const deleteGBMemberUseCase = async (id) => {
  return GoverningBodyMember.findByIdAndDelete(id);
};
