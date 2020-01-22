import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";
const ImageList = props => {
  // .map(=>{}) will itterate through each element in the list and do the function (just think of the enhanced forloop)
  // without key in <img> tag, it will cause warning
  //because to render the updates react will check the contents with correspoding keys with current DOM
  // Therefore in LIST
  // it is good to identify key for performance and etc...
  const images = props.images.map(image => {
    // add the key values in the root of returned JSX tag
    return <ImageCard key={image.id} image  ={image}></ImageCard>;

    // if It is enclosed with <Div> then need the key on div instead of <img> tag
    // return <div key={image.id} ><img src={image.urls.regular}></img> </div>;
    // 이렇게 Deconstruction으로 image자체에서 description과 id, urls만 뽑아서 사용하면 좋다.
    //
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
