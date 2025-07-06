import React from "react";
import BenefitCard from "../../SectionCards/SectionCard";
import onlineBankingIcon from "../../../assets/images/icon-online.svg";
import budgetingIcon from "../../../assets/images/icon-budgeting.svg";
import onboardingIcon from "../../../assets/images/icon-onboarding.svg";
import apiIcon from "../../../assets/images/icon-api.svg";

function EasyBankBenefits() {
  return (
    <section className="Easybank-benefits">
      <div className="benefits-header">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account info your financial
          hub. <br />
          Control your financies like never before
        </p>
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <BenefitCard
          imgUrl={onlineBankingIcon}
          title="Online Banking"
          description="Our Modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        />
        <BenefitCard
          imgUrl={budgetingIcon}
          title="Simple Budgeting"
          description="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
        />
        <BenefitCard
          imgUrl={onboardingIcon}
          title="Fast Onboarding"
          description="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
        />
        <BenefitCard
          imgUrl={apiIcon}
          title="Open API"
          description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        />
      </div>
    </section>
  );
}

export default EasyBankBenefits;
