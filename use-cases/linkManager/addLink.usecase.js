import linkManager from "../../entities/LinkManager.js";

export const addLinkUseCase = async ({ title, url }) => {
  const newLink = new linkManager({
    title,
    url,
  });

  await newLink.save();
  return newLink;
};
