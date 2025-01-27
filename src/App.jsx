import { useState ,useEffect } from "react";
import "./App.css";
import i18n from "i18next";
import Home from "./components/Home/Home";
import ManagePlaylist from "./components/ManagePlaylist/ManagePlaylist";
import NotFound from "./components/NotFound/NotFound";
import LayOut from "./components/LayOut/LayOut";
import ActivateDevices from "./components/ActivateDevices/ActivateDevices";
import SwitchMac from "./components/SwitchMac/SwitchMac";
import ParentPin from "./components/ParentPin/ParentPin";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import AddPlayList from "./components/AddPlayList/AddPlayList";
import EditPlaylist from "./components/EditPlaylist/EditPlaylist"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ManagePlaylistRouting from "./components/ManagePlaylistRouting/ManagePlaylistRouting";
import "./lang.jsx"

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.document.dir = i18n.dir()
  }, [])

  const routes = createBrowserRouter([
    {
      path: "/Wish",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "manageplaylist",
          element: <ManagePlaylistRouting />, 
          children: [
            { index: true, element: <ManagePlaylist /> },
            { path: "addplaylist", element: <AddPlayList /> },
            { path: "editplaylist/:id", element: <EditPlaylist /> },
            { path: "activatedevices", element: <ActivateDevices /> },
            { path: "switchmac", element: <SwitchMac /> },
            { path: "parentpin", element: <ParentPin /> },
            { path: "accountdetails", element: <AccountDetails /> },
          ],
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;

