"use client";
import { useEffect, useState } from "react";

function PlanCards() {
  const [planCardActive, setPlanCardActive] = useState(null);

  

  return (
    <>
      <div className="section__title">Choose the plan that fits you</div>
      <div
        onClick={() => setPlanCardActive("yearly")}
        className={`plan__card ${
          planCardActive === "yearly" ? "plan__card--active" : ""
        }`}
      >
        <div className="plan__card--circle">
          <div
            className={`${
              planCardActive === "yearly" ? "plan__card--dot" : ""
            }`}
          ></div>
        </div>
        <div className="plan__card--content">
          <div className="plan__card--title">Premium Plus Yearly</div>
          <div className="plan__card--price">$59.99/year</div>
          <div className="plan__card--text">7-day free trial included</div>
        </div>
      </div>
      <div className="plan__card--separator">
        <div className="plan__separator">or</div>
      </div>
      <div
        onClick={() => setPlanCardActive("monthly")}
        className={`plan__card ${
          planCardActive === "monthly" ? "plan__card--active" : ""
        }`}
      >
        <div className="plan__card--circle">
          <div
            className={`${
              planCardActive === "monthly" ? "plan__card--dot" : ""
            }`}
          ></div>
        </div>
        <div className="plan__card--content">
          <div className="plan__card--title">Premium Monthly</div>
          <div className="plan__card--price">$5.99/month</div>
          <div className="plan__card--text">No trial included</div>
        </div>
      </div>
      {planCardActive === "yearly" ? (
        <>
          <div className="plan__card--cta">
            <span className="btn--wrapper">
              <button className="btn">
                {/* style="width:300px" */}
                <span>Start your free 7-day trial</span>
              </button>
            </span>
            <div className="plan__disclaimer">
              Cancel your trial at any time before it ends, and you won't be
              charged.
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="plan__card--cta">
            <span className="btn--wrapper">
              <button className="btn">
                {/* style="width:300px" */}
                <span>Start your first month</span>
              </button>
            </span>
            <div className="plan__disclaimer">
              30-day money back guarantee, no questions asked.
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PlanCards;
