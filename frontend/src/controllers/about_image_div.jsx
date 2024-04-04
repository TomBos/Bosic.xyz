function ImageDiv({ imgSrc }) {
  return (
    <img
      src={imgSrc}
      width="35"
      height="35"
      alt=""
      className="image-skill"
      aria-hidden="true"
    />
  );
}

export default ImageDiv;
