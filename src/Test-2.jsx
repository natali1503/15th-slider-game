export default function Img2() {
  const imageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64StringUS = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      localStorage.setItem("wallpaperXXX", base64StringUS);
      const myImage = localStorage.getItem("wallpaperXXX");
      var bannerImg = document.getElementById("tableBanner");
      bannerImg = document.getElementById("tableBanner");
      bannerImg.src = "data:image/png;base64," + myImage;
      //document.body.style.background = `url(data:image/png;base64,${base64StringUS})`;
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="App">
      <input
        type="file"
        id="imageFile"
        name="imageFile"
        onChange={imageUpload}
      />
      <img alt="try2" id="tableBanner" />
    </div>
  );
}
