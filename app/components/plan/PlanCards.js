function PlanCards() {
  return (
    <>
      <div className="section__title">Choose the plan that fits you</div>
      <div className="plan__card plan__card--active">
        <div className="plan__card--circle">
          <div className="plan__card--dot"></div>
        </div>
        <div className="plan__card--content">
          <div className="plan__card--title">Premium Plus Yearly</div>
          <div className="plan__card--price">$99.99/year</div>
          <div className="plan__card--text">7-day free trial included</div>
        </div>
      </div>
      <div className="plan__card--separator">
        <div className="plan__separator">or</div>
      </div>
      <div className="plan__card ">
        <div className="plan__card--circle"></div>
        <div className="plan__card--content">
          <div className="plan__card--title">Premium Monthly</div>
          <div className="plan__card--price">$9.99/month</div>
          <div className="plan__card--text">No trial included</div>
        </div>
      </div>
      <div className="plan__card--cta">
        <span className="btn--wrapper">
          <button className="btn" >
            {/* style="width:300px" */}
            <span>Start your free 7-day trial</span>
          </button>
        </span>
        <div className="plan__disclaimer">
          Cancel your trial at any time before it ends, and you won’t be
          charged.
        </div>
      </div>
    </>
  );
}

export default PlanCards;
