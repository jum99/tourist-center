import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home/Home";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";
import AddANewService from "./components/AddANewService/AddANewService";
import Admin from "./components/Admin/Admin";
import MyBookings from "./components/MyBookings/MyBookings";
import Booking from "./components/Booking/Booking";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ManageAllBookings from "./components/ManageAllBookings/ManageAllBookings";
import AllResorts from "./components/AllResorts/AllResorts";
import About from "./components/About/About";
import Resorts from "./components/Resorts/Resorts";





function App() {


  return (


    <AuthProvider>

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/resorts">
            <Resorts></Resorts>
          </Route>

          <Route path="/myBookings">
            <MyBookings></MyBookings>
          </Route>
          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>

          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/manageAllBookings">
            <ManageAllBookings></ManageAllBookings>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/addANewService">
            <AddANewService></AddANewService>
          </Route>
          <Route path="/allResorts">
            <AllResorts></AllResorts>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
