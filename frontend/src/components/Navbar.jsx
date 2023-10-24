import { Link } from "react-router-dom";
import { Logout } from "../api/internal";
import { resetUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {

const auth=useSelector(state=>state.user.auth);
const dispatch=useDispatch();

  

  const HandleLogout =async()=>{
   const response=  await Logout();

    if(response.status==200){
      dispatch(resetUser());
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {!auth ?<>
             <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
             </>
             :  <li className="nav-item">
             <button onClick={HandleLogout} className="btn btn-danger" to="/signup">
               Logout
             </button>
           </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
}
