import Banner from "../components/Banner";
import Products from "../components/Products";
import Login from "../Login";

function Home() {
  const userData = localStorage?.getItem("user");
  const parsedData = JSON?.parse(userData);

  function logout() {
    localStorage.removeItem("user");
    window.location.reload();
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
          <h4>Welcome {parsedData?.name}</h4>
        </div>
      </div>
      <Banner />
      <Products />
    </>
  );
}
export default Home;
