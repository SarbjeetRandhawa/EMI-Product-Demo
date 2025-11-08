import React from 'react';

export default function EMIPlanCard({ plan, isSelected, onSelect }) {
  return (
    <div className={`emi-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <div className="emi-left">
        <div className="emi-amount">₹{plan.monthlyAmount.toLocaleString()} × {plan.tenureMonths} months</div>
        {plan.cashback ? <div className="emi-cashback">Additional cashback of ₹{plan.cashback.toLocaleString()}</div> : null}
      </div>
      <div className="emi-right">
        <div className="emi-interest">{plan.interestRatePercent}% interest</div>
      </div>
    </div>
  );
}
