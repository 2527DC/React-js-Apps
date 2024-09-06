import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";

import FetchItems from "../component/Fetchitems";
import { useSelector } from "react-redux";
import Loader from "../component/Loader";
const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching ? <Loader /> : <Outlet></Outlet>}

      <Footer></Footer>
    </>
  );
};
export default App;
