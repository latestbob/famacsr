import React from "react";
import Home from "./pages/Home";
import Clean from "./pages/Clean";
import Service from "./pages/Service";
import Return from "./pages/Return";
import Last from "./pages/Last";



const appName:string = "Famacare"


const routes = [
    {
        id:1,
        path:'/',
        exact:true,
        auth:false,
        component:Home,
        pageTile:`${appName} - Customer Satisfaction Form`
    },

      {
        id:2,
        path:'/section-two',
        exact:true,
        auth:false,
        component: Clean,
        pageTile:`${appName} - Customer Satisfaction Form`
    },

    {
        id:2,
        path:'/section-three',
        exact:true,
        auth:false,
        component: Service,
        pageTile:`${appName} - Customer Satisfaction Form`
    },

    {
        id:3,
        path:'/section-four',
        exact:true,
        auth:false,
        component: Return,
        pageTile:`${appName} - Customer Satisfaction Form`
    },

    {
        id:3,
        path:'/section-five',
        exact:true,
        auth:false,
        component: Last,
        pageTile:`${appName} - Customer Satisfaction Form`
    },




    
];

export default routes;