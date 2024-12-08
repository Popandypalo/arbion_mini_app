// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./BottomStyle.css";
import Home from "../../assets/icons/Home";
import HomeActivity from "../../assets/icons/activity/HomeActivity";
import FAQActivity from "../../assets/icons/activity/FAQActivity";
import WalletActivity from "../../assets/icons/activity/WalletActivity";
import PartnersActivity from "../../assets/icons/activity/PartnersActivity";
import Wallet from "../../assets/icons/Wallet";
import Partners from "../../assets/icons/Partners";
import FAQ from "../../assets/icons/FAQ";

const BottomNavigation = () => {
    const location = useLocation();
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setScreenHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Функция для расчета процента в зависимости от высоты экрана
    const getMarginTop = () => {
        if (screenHeight === 844) {
            return '-198.74769230769231%'; // Для высоты 844px
        } else if (screenHeight === 932) {
            return '-187.74769230769231%'; // Для высоты 932px
        }
        return '-5vh'; // Значение по умолчанию для других высот
    };

    const getIcon = (path, ActiveIcon, InactiveIcon) => {
        return location.pathname === path
            ? <ActiveIcon className="svg-container" />
            : <InactiveIcon className="svg-container" />
    }

    return (
        <div className="z-50 h-[9.88625592417062%] flex justify-between item-center">
            <div className="header-container w-full h-[8.88625592417062%] fixed bottom-[-0.4739336492890995%]">
                {/* Домашняя страница */}
                <Link to={'/'}>
                    <div className="flex flex-col items-center">
                        {getIcon('/', HomeActivity, Home)}
                        {location.pathname === '/' && (
                            <div 
                                className="w-[calc(100%+40px)] h-1 bg-white rounded-bl-[20px] rounded-br-[20px]" 
                                style={{
                                    marginLeft: "-20px", 
                                    marginRight: "-20px", 
                                    marginTop: getMarginTop() // Здесь применяем динамическое значение
                                }}
                            />
                        )}
                    </div>
                </Link>

                {/* Кошелек */}
                <Link to={"/wallet"}>
                    <div className="flex flex-col items-center">
                        {getIcon('/wallet', WalletActivity, Wallet)}
                        {location.pathname === '/wallet' && (
                            <div 
                                className="w-[calc(100%+40px)] h-1 bg-white rounded-bl-[20px] rounded-br-[20px]" 
                                style={{
                                    marginLeft: "-20px", 
                                    marginRight: "-20px", 
                                    marginTop: getMarginTop() // Здесь применяем динамическое значение
                                }}
                            />
                        )}
                    </div>
                </Link>

                {/* Партнеры */}
                <Link to={"/partners"}>
                    <div className="flex flex-col items-center">
                        {getIcon('/partners', PartnersActivity, Partners)}
                        {location.pathname === '/partners' && (
                            <div 
                                className="w-[calc(100%+40px)] h-1 bg-white rounded-bl-[20px] rounded-br-[20px]" 
                                style={{
                                    marginLeft: "-20px", 
                                    marginRight: "-20px", 
                                    marginTop: getMarginTop() // Здесь применяем динамическое значение
                                }}
                            />
                        )}
                    </div>
                </Link>

                {/* Часто задаваемые вопросы */}
                <Link to={"/faq"}>
                    <div className="flex flex-col items-center">
                        {getIcon('/faq', FAQActivity, FAQ)}
                        {location.pathname === '/faq' && (
                            <div 
                                className="w-[calc(100%+40px)] h-1 bg-white rounded-bl-[20px] rounded-br-[20px]" 
                                style={{
                                    marginLeft: "-20px", 
                                    marginRight: "-20px", 
                                    marginTop: getMarginTop() // Здесь применяем динамическое значение
                                }}
                            />
                        )}
                    </div>
                </Link>
            </div>
        </div>  
    );
};

export default BottomNavigation;
