import "./App.css";
import HomePage from "./components/LandingPage";
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom" 
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import ProductsPage from "./components/ProductsPage";
import Data from "./components/Data";

function App() {
  return (
    
    <div className="App">
      <Data/>
      <div>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
            </nav>
          </div>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route  path="/cart">
              <Cart/>
            </Route>
            <Route  path="/about">
              <AboutUs/>
            </Route>
            <Route  path="/products">
              <ProductsPage/>
              </Route>
            <Route  path="*">
              <Redirect to = "/"/>
            </Route>
          </Switch>
        </Router>
      </div>

    </div>
  );
}

export default App;

