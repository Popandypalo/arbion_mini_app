// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import icon_home from "../../assets/icons/icon_home.svg";
import "./BottomStyle.css";
import SvgIcon1 from "../../assets/icons/SvgIcon1";
import SvgIcon2 from "../../assets/icons/SvgIcon2";
import SvgIcon3 from "../../assets/icons/SvgIcon3";
import SvgIcon4 from "../../assets/icons/SvgIcon4";

const BottomNavigation = () => {
    return (
        <div className="z-50 h-[8.88625592417062%] flex justify-between item-center">
                    <div className="header-container w-full h-[8.88625592417062%]">
              <div className="card-container-with-svg">
                <div className="horizontal-divider" />
                <div className="content-wrapper">
                  <SvgIcon1 className="svg-container" />
                </div>
              </div>
              <div className="card-container">
                <SvgIcon2 className="svg-container1" />
              </div>
              <div className="card-container">
                <SvgIcon3 className="svg-container1" />
              </div>
              <div className="flex-column-align-end-with-padding">
                <SvgIcon4 className="svg-container2" />
              </div>
            </div>
        </div>  
    );
};

export default BottomNavigation;

