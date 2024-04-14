import "./styles.css";
import React, { useState } from "react";

interface IProps {}

export default function MortgageCalculator(): React.ReactElement<IProps> {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(3);
  const [term, setTerm] = useState(30);
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const [totalInterest, setTotalInterest] = useState("");

  const calculatePayment = () => {
    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const monthlyPayment =
      (amount * (rate / 100 / 12)) /
      (1 - 1 / Math.pow(1 + rate / 100 / 12, term * 12));
    const totalPayment = monthlyPayment * term * 12;

    setTotalMonthlyPayment(currencyFormatter.format(monthlyPayment));
    setTotalPayment(currencyFormatter.format(totalPayment));
    setTotalInterest(currencyFormatter.format(totalPayment - amount));
  };

  return (
    <>
      <form>
        <label>Loan amount ($): </label>
        <input
          type="number"
          defaultValue={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <label>Annual interest rate (%): </label>
        <input
          type="number"
          defaultValue={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
        <label>Loan term (in years): </label>
        <input
          type="number"
          defaultValue={term}
          onChange={(e) => setTerm(Number(e.target.value))}
        />
      </form>
      <button type="submit" onClick={calculatePayment}>
        Calculate
      </button>
      <p>
        <b>Monthly Payment Amount: </b>
        {totalMonthlyPayment}
      </p>
      <p>
        <b>Total Payment Amount: </b>
        {totalPayment}
      </p>
      <p>
        <b>Total Interest Paid: </b>
        {totalInterest}
      </p>
    </>
  );
}
