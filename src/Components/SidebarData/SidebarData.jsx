import React from 'react';
import { MdDashboard,MdArticle,MdComment,MdOutlineShoppingBag,MdList } from "react-icons/md";

export const SidebarData = [
    {
        title:"Dashboard",
        icon: <MdDashboard />,
        path:"/dashboard"
      },
    {
        title:"About",
        icon: < MdArticle/>,
        path:"/about"
      },
      {
        title:"Comment",
        icon: <MdComment />,
        path:"/comment"
      },
      {
        title:"Product",
        icon: <MdOutlineShoppingBag />,
        path:"/product"
      },
      {
        title:"ProductList",
        icon: <MdList />,
        path:"/productlist"
      },

];