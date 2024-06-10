import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import Home from "../Pages/Home";
import AuthPage from "./AuthPage";
import Login from "@/Pages/Auth/Login";
import SignUp from "@/Pages/Auth/SignUp";
import About from "@/Pages/Dashboard";
import DashBoardPage from "./DashBoardPage";
import Dashboard from "@/Pages/Dashboard";
import Airtime from "@/Pages/BuyAirtime";
import AirtimeHistory from "@/Pages/BuyAirtime/component/AirtimeHistory";
import Data from "@/Pages/BuyData";


export const route = createBrowserRouter([
    {
        path:"/",
        element:<Homepage/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"about",
                element:<About/>
            }
        ]
    },
    {
        path:"/auth",
        element:<AuthPage/>,
        children:[
            {
                index:true,
                element:<Login/>,
            },
            {
                path:"signup",
                element:<SignUp/>
            }
        ]
    },
    {
        path:"/dashBoard",
        element:<DashBoardPage/>,
        children:[
            {
                index:true,
                element:<Dashboard/>,
            },
            {
                path:"buyairtime",
                element:<Airtime/>
            },
            {
                path:"history",
                element:<AirtimeHistory/>
            },
            {
                path:"buydata",
                element:<Data/>
            },
        ]
    }

])