function PartOfImage({ src, index, onKeyDown }) {
  return (
    <div key={index} style={{ margin: "3px" }} onKeyDown={onKeyDown}>
      <img
        alt={`Part ${index}`}
        src={src}
        style={{ width: "150px", height: "auto" }}
      />
    </div>
  );
}

export default PartOfImage;
