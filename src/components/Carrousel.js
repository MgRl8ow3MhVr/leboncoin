import React, { useState } from "react";

const Carrousel = props => {
  const { pics } = props;
  const [imgNum, setImgNum] = useState(0);
  const totalImages = pics.length;
  console.log("total", totalImages);
  console.log(pics);
  console.log(imgNum);

  return (
    <div className="carrousel">
      {/* //main image */}
      <img src={pics[imgNum]} alt="pic" />
      {/* //previews */}
      <div className="previews">
        {pics.map((pic, index) => {
          return (
            <div
              onClick={() => {
                setImgNum(index);
              }}
            >
              <img src={pic} alt="pic" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Carrousel;
