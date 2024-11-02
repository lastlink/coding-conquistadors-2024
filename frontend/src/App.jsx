import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./index.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SubscribePage from "./pages/SubscribePage";
import DataPage from "./pages/DataPage";
import { useEffect, useState } from "react";
import fundingData from "../../../db.json";

function App() {
  // API fetch requests go here:
  const [funding, setFunding] = useState([]);

  useEffect(() => {
    const fetchFunding = async () => {
      try {
        // const res = await fetch(`${apiURL}/`);
        // const data = await res.json();
        const dbJson = fundingData;
        setFunding(dbJson);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchFunding();
  }, []);

  // Routes go here:

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/data_table" element={<DataPage fundings={funding} />} />
      </Route>
    )
  );
  // Routes end here
  return <RouterProvider router={router} />;
}

export default App;
