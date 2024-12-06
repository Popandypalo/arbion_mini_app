// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation";

const MainLayouts = () => {
    return (
        <div data-theme="synthwave">
            <Outlet/>
            sfsdfsdfsdf
            <BottomNavigation/>
        </div>  
    );
};

export default MainLayouts;