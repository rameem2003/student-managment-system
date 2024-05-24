import React from "react";

const Image = ({ className, src, alt }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Image;
