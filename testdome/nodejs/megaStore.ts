enum DiscountType {
  Standard,
  Seasonal,
  Weight,
}

function getDiscountedPrice(
  cartWeight: number,
  totalPrice: number,
  discountType: DiscountType
): number {
  switch (discountType) {
    case DiscountType.Weight:
      if (cartWeight > 10) {
        totalPrice = totalPrice - totalPrice * 0.18;
      } else {
        totalPrice = totalPrice - totalPrice * 0.06;
      }
      break;
    case DiscountType.Seasonal:
      totalPrice = totalPrice - totalPrice * 0.12;
      break;
    case DiscountType.Standard:
      totalPrice = totalPrice - totalPrice * 0.06;
      break;
    default:
      break;
  }
  return totalPrice;
}

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));
