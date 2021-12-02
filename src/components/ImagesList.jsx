import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ImagesList = (props) => {
  const imageClick = (url) => {
    window.open(url);
  }
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {props.urls.map((item) => (
        <ImageListItem key={item.small}>
          <img
            src={item.small}
            srcSet={item.small}
            alt={item.small}
            onClick={() => imageClick(item.full)}
            loading="eager"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImagesList;
