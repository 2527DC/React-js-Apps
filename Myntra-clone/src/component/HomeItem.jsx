import { useDispatch, useSelector } from "react-redux";
import { BagItemAction } from "../store/BagItem";

const HomeItem = ({ item }) => {
  const bag = useSelector((store) => store.bag);

  const itemfound = bag.indexOf(item.id) >= 0;

  const dispatch = useDispatch();
  const handleadd = () => {
    dispatch(BagItemAction.addBagItems(item.id));
  };
  const handleremove = () => {
    dispatch(BagItemAction.removeBagItems(item.id));
  };
  return (
    <>
      {" "}
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {itemfound ? (
          <button className="btn-add-bag"  onClick={handleremove} >remove</button>
        ) : (
          <button className="btn-add-bag" onClick={handleadd}>
            Add to Bag
          </button>
        )}
      </div>
      `
    </>
  );
};
export default HomeItem;
