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
    <div className="Section-Card">
      {variant === "benefit" && (
        <>
          <img src={imgUrl} alt={title} className="benefit-img" />
          <h3>{title}</h3>
        </>
      )}

      {variant === "article" && (
        <>
          <img src={imgUrl} alt={title} className="article-img" />
          <span>{author ? `By ${author}` : "Annonymous Author"}</span>
          <h4>{title}</h4>
        </>
      )}
      <p>{description}</p>
    </div>
  );
}

export default SectionCard;
