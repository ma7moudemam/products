import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Navbar from "./Components/NavBar/Navbar";
// import NotFound from "./Pages/NotFound";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';




function App() {
  return (
    <Router className="container">
      <Navbar/>
      <switch>
      <Route path="/" exact component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/products" exact component={Products}/>
      <Route path="/products/:id" component={ProductDetails}/>
      {/* <Route path="*" component={NotFound}/> */}
      </switch>
    </Router>
  );
}

export default App;
