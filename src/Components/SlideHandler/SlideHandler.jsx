import { useState } from "react";

const SlideHandler = () => {
  const [count, setCount] = useState(0);
  // let imagesArray = ["http://surl.li/htkac","http://surl.li/htkah","http://surl.li/htkaq","http://surl.li/htkat","http://surl.li/htkax"];
  let slideImages = [
    "https://web-screen.com/storage/screenshots/2024/02/68aaa95e-f792-4803-ad06-02d34d90f782.png",
    "https://web-screen.com/storage/screenshots/2024/03/5950fb57-3c9d-4d46-9329-8132349023eb.png",
    "https://web-screen.com/storage/screenshots/2024/03/99e99251-d9a7-4a51-b0ee-c5d517e28cf0.png",
    "https://web-screen.com/storage/screenshots/2024/03/f4c93a16-61ba-4f71-a1c5-f9bbbf4c8524.png",
    "https://web-screen.com/storage/screenshots/2024/03/33c110cc-be43-4d43-8eee-b4934a4401c0.png",
  ];
  console.log("images", slideImages);
  const [slideNumber, setSlideNumber] = useState(0);
  function ImageHandler(value){
    if(value=="prev"){
        setSlideNumber((value)=>(value-1+5)%5);
    }else{
        setSlideNumber((value)=>(value+5)%5);
    }
  }
  return (
    <>
      <div className="container">
        <h1 className="title">Slideshow</h1>
        <div className="slideshow">
          <button 
          onClick={()=>ImageHandler("prev")}
          className="prev-button">Previous</button>
          <div className="">
            {
                <img className="image" src={slideImages[slideNumber]} alt="Slideshow" />}
          </div>
          <button
          onClick={()=>ImageHandler("next")}

           className="next-button">Next</button>
        </div>
      </div>
    </>
  );
};
export default SlideHandler;
