import React, { useEffect, useState } from "react";
const imageUrl =
  "https://i.pinimg.com/736x/07/32/6c/07326c595630f8b71cde53df817b397e.jpg";

export default function Test() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl, { mode: "no-cors" });
    console.log(res);
    // const imageBlob = await res.blob();
    // console.log(imageBlob);
    // const imageObjectURL = URL.createObjectURL(imageBlob);
    // console.log(imageBlob);
    // setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <img src={img} alt="icons" />
    </>
  );
}
