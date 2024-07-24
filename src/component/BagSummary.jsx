import { useSelector } from "react-redux";

const BagSummary = () => {
  const bag = useSelector((store) => store.bag);
  const item = useSelector((store) => store.item);
  const Convenience_fee = 99;
  let totalItem = bag.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  const finalItem = item.filter((item) => {
    const bagitem = bag.indexOf(item.id);
    return bagitem >= 0;
  });
  finalItem.forEach((e) => {
    totalMRP += e.original_price;
    console.log(e)
    totalDiscount += e.original_price - e.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + Convenience_fee;

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹${totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};
export default BagSummary;
