import logo from "./logo.svg";
import Invoice from "./Pages/Invoice";
import history from "./Helpers/History";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className="">
      {/* <AuthContext.Provider value={{ authenticated, setAuthenticated }}> */}
      <BrowserRouter history={history}>
        <Navbar />
        <div id="App" className="">
          <Routes>
            <Route exact path="/" element={<Invoice />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;
