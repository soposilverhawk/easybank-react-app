import React from "react";
import "./SectionCard.css";

function SectionCard({
  imgUrl,
  title,
  description,
  author = null,
  variant = "benefit",
}) {
  return (
    <>
      {variant === "benefit" && (
        <div className="Section-Card benefit">
          <img src={imgUrl} alt={title} className="benefit-img" />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}

      {variant === "article" && (
        <div className="Section-Card article">
          <img src={imgUrl} alt={title} className="article-img" />
          <span>{author ? `By ${author}` : "Annonymous Author"}</span>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      )}
    </>
  );
}

export default SectionCard;
