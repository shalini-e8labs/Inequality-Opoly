import './App.css';
import SplashScreen from "./MyComponets/SplashScreen";
import Tutorials from "./MyComponets/Tutorials/Tutorials";
import Join from "./MyComponets/Join";
import CreateRoomfun from "./MyComponets/CreateRoom";
import JoinRoomfun from "./MyComponets/JoinRoom";
import Waitingroom from "./MyComponets/waitingroom/waitingroom";
import Forgotpassword from "./MyComponets/ForgotPassword/ForgotPassword";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const stripePromise=loadStripe('pk_test_51HI8DKFnJnpnXbSy7opnsEbltFN4Py8E9aEWQzWXT4M20kRxnQTkhtkm6Vtd0cyWRmVv38I5lxgzzXOOZomqmqsC00M0rbFc7r');
function App() {
  let islogin = false;
  if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){
    islogin = true;
  }
  return (
    // <SplashScreen></SplashScreen>
    <> 
    <Router>
      {/* <Header title="My Todos List" searchBar={false} />  */}
      <Switch>
          <Route exact path="/" render={()=>{
            return <SplashScreen/>
          }}> 
          </Route>
          <Route exact path="/Tutorials">
            <Tutorials />
          </Route> 
          <Route exact path="/Join">
            <Join login={islogin} />
          </Route> 
          <Route exact path="/CreateRoom">
            <Elements stripe={stripePromise}>
                <CreateRoomfun login={islogin} />
            </Elements>
          </Route> 
          <Route exact path="/JoinRoom">
            <Elements stripe={stripePromise}>
                <JoinRoomfun login={islogin} />
            </Elements>
          </Route>
          <Route exact path="/waitingroom">
            <Waitingroom />
          </Route>
          <Route path="/ForgotPassword">
            <Forgotpassword />
          </Route>
        </Switch> 
    </Router>
    </>
  );
}

export default App;
