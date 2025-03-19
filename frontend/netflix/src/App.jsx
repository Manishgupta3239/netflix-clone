import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Verify from "./components/Verify";
import Index from "./components/Index";
import Logout from "./components/Logout";
import Home from "./components/Home";
import Tvshows from "./components/Tvshows";
import Pagenotfound from "./components/Pagenotfound";
import Search from "./components/Search";
import History from "./Context/History";
import Watch from "./components/Watch";

const router = createBrowserRouter(
  [
    {
      path : "/",
      element :<Index/>,
      
    },
    {
      path : "/login",
      element :<div>
        <Login/>
      </div>
    },
    {
      path : "/signup/reform/:email",
      element :<div>
        <SignUp/>
      </div>
    },
    {
      path : "/signup/verifyemail/:email/",
      element :<div>
        <Verify/>
      </div>
    },
    {
      path : "/logout",
      element :<div>
        <Logout/>
      </div>
    },
    {
      path : "/home",
      element :<div>
        <Home/>
      </div>
    },
    {
      path : "/home/:type",
      element :<div>
        <Home/>
      </div>
    },{
      path : "/search",
      element :<div>
        <Search/>
      </div>
    },{
      path : "/history",
      element :<div>
       <History/>
      </div>
    },

    {
      path : "/tvshow",
      element :<div>
        <Tvshows/>
      </div>
    },
    {
      path : "/watch/:id",
      element :<div>
        <Watch/>
      </div>
    },
    {
      path : "/*",
      element :<div>
        <Pagenotfound/>
      </div>
    },
  ]
)

function App() {

  return (
    <>
    {/* <Index/> */}
    <RouterProvider router={router}/>
    </>
  );
}
export default App;
