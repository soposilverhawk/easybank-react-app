import React from "react";
import InfoSection from "../components/sections/InfoSection/InfoSection";
import EasyBankBenefits from "../components/sections/EasyBankBenefits/EasyBankBenefits";
import ArticlesSection from "../components/sections/Articles/ArticlesSection";

function Home() {
  return (
    <>
      <InfoSection />
      <EasyBankBenefits />
      <ArticlesSection />
    </>
  );
}

export default Home;
