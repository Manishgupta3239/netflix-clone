import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TVshowsprovider from "./Context/TVshowsprovider.jsx";
import MovieProvider from "./Context/MovieProvider.jsx";;
import AuthProviderNew from "./Context/AuthProviderNew.jsx";


createRoot(document.getElementById("root")).render(
  
      <AuthProviderNew>
        <MovieProvider>
          <TVshowsprovider>
            <App />
          </TVshowsprovider>
        </MovieProvider>
      </AuthProviderNew>

);
