import "./partOfImage.css";
function PartOfImage({ src, index, onKeyDown }) {
  return (
    <div key={index} onKeyDown={onKeyDown} className="part-image-box">
      <img alt={`Part ${index}`} src={src} className="part-image" />
    </div>
  );
}

export default PartOfImage;
