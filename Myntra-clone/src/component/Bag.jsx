import { useSelector } from "react-redux";
import BagItem from "./BagItem.jsx";
import BagSummary from "./BagSummary.jsx";
const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const item = useSelector((store) => store.item);

  const finalItem = item.filter((item) => {
    const bagitem = bag.indexOf(item.id);
    return bagitem >= 0;
  });

  return (
    <> 
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
         {finalItem.map((item)=> <BagItem key={item.id} item={item}></BagItem>)}  
          </div>
          <div className="bag-summary">
            <BagSummary></BagSummary>
          </div>
        </div>
      </main>
    </>
  );
};
export default Bag;
