import { useMemo, useState } from "react";

const PriceCalculator = () => {
  const [type, setType] = useState("standard");
  const [weight, setWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const discountedPrice = useMemo(() => {
    switch (type) {
      case "weight":
        if (weight > 10) {
          return totalPrice - totalPrice * 0.18;
        } else {
          return totalPrice - totalPrice * 0.06;
        }
      case "seasonal":
        return totalPrice - totalPrice * 0.12;
      case "standard":
        return totalPrice - totalPrice * 0.06;
      default:
        return totalPrice;
    }
  }, [type, weight, totalPrice]);

  return (
    <div>
      <label htmlFor="type">Select Type:</label>
      <select
        id="type"
        name="type"
        value="standard"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="standard">Standard</option>
        <option value="seasonal">Seasonal</option>
        <option value="weight">Weight</option>
      </select>

      <label htmlFor="weight">Weight (kg):</label>
      <input
        type="number"
        id="weight"
        name="weight"
        step="0.01"
        onChange={(e) => setWeight(+e.target.value)}
      />

      <label htmlFor="totalPrice">Total Price ($):</label>
      <input
        type="number"
        id="totalPrice"
        name="totalPrice"
        step="0.01"
        onChange={(e) => setTotalPrice(+e.target.value)}
      />

      <div>
        Discounted price:
        <span id="discountedPrice">{discountedPrice}</span>
      </div>
    </div>
  );
};

export default PriceCalculator;
