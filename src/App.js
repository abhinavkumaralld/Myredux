import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Error from "./components/Error";
import Dynamic from "./components/Dynamic";
import UserContext from "./context/UserContext";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store";
App = () => {
  const [user, setuser] = useState("");
  const currUser = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <Provider store={Store}>
        <Navbar setuser={setuser} />
        <UserContext.Provider
          value={{ user: { name: user, hii: "kuchh bhi" } }}
        >
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/service", element: <Service /> },
      { path: "/dynpage/:id", element: <Dynamic /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
