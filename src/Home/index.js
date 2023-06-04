import Banner from "../components/Banner";
import Products from "../components/Products";
import Login from "../Login";
import { useSelector, useDispatch } from "react-redux";
import { logoutStatic } from "../store/authSlice";

function Home() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function logout() {
    dispatch(logoutStatic());
  }
  return (
    <>
      {/* <Login /> */}
      <div className="row my-3">
        <div className="col-md-6">
          <button onClick={() => logout()} className="btn btn-warning">
            Logout
          </button>
        </div>
        <div className="col-md-6 text-end">
          <h4>Welcome {user?.name}</h4>
        </div>
      </div>
      <Banner />
      <Products />
    </>
  );
}
export default Home;
