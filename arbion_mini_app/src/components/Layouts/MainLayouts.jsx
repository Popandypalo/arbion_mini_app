// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation";
import "./MainLayoutsStyle.css";

const MainLayouts = () => {
    return (
        <div data-theme="synthwave" className="container">
            {/* Контент маршрута */}
            <div className="z-10" style={{ position: 'absolute', zIndex: 3 }}>
                <Outlet />
            </div>

            {/* Фоновый контейнер с засветами */}
            <div className="z-0" style={{ position: 'relative', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
                <video
                    className="background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src='src/assets/images/123.mp4' // Замените на путь к вашему видео
                ></video>
                <div className="gradient"></div>
                <div className="ellipse-25"></div>
                <div className="ellipse-26"></div>
                <div className="ellipse-25-reversed"></div>
                <div className="ellipse-26-reversed"></div>

                <div className="light light-1"></div>
                <div className="light light-2"></div>
                <div className="light light-3"></div>
            </div>

            {/* Нижняя навигация */}
            <BottomNavigation />
        </div>
    );
};

export default MainLayouts;
