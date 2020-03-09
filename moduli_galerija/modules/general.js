let generateImage = src => {
  let img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", "image failed loading");
  return img;
};

//export { generateImage };
export default generateImage;