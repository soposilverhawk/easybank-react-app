import React from "react";
import ArticleCard from "../../SectionCards/SectionCard";
import currencyImg from "../../../assets/images/image-currency.jpg";
import restaurantImg from "../../../assets/images/image-restaurant.jpg";
import planeImg from "../../../assets/images/image-plane.jpg";
import confettiImg from "../../../assets/images/image-confetti.jpg";
import "./ArticlesSection.css"

function ArticlesSection() {
  return (
    <section className="Articles-section">
      <div className="articles-header">
        <h2>Latest Articles</h2>
      </div>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <ArticleCard
          imgUrl={currencyImg}
          title="Receive Money in any currency with no fees"
          description="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
          author="Claire Robinson"
          variant="article"
        />
        <ArticleCard
          imgUrl={restaurantImg}
          title="Treat yourself without worrying about money"
          description="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
          author="Wilson Hutton"
          variant="article"
        />
        <ArticleCard
          imgUrl={planeImg}
          title="Take your Easybank card wherevere you go"
          description="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
          author="Wilson Hutton"
          variant="article"
        />
        <ArticleCard
          imgUrl={confettiImg}
          title="Our invite-only Beta accounts are now live!"
          description="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
          author="Claire Robinson"
          variant="article"
        />
      </div>
    </section>
  );
}

export default ArticlesSection;
