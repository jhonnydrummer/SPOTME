import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import PropTypes from "prop-types";


const RoutesApp = () => {
  const Private = ({ children }) => {

    Private.propTypes = {
      children: PropTypes.node.isRequired,
    };
    return children;
  };



  return (
    <Router>
      
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Private><Home /></Private>}/>
        </Routes>
    </Router>
  );
};

export default RoutesApp;
