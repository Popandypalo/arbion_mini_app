// eslint-disable-next-line no-unused-vars
import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
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
    const headerRef = useRef(null); // Ссылка на header-container
    const [headerHeight, setHeaderHeight] = useState(0);

    useLayoutEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                const height = headerRef.current.getBoundingClientRect().height;
                setHeaderHeight(height);
            } 
        };

        updateHeaderHeight(); // Устанавливаем начальную высоту при монтировании

        window.addEventListener('resize', updateHeaderHeight);
        return () => window.removeEventListener('resize', updateHeaderHeight);
    }, []);

    // Функция для расчета отступа от верхней части родителя
    const getMarginTop = () => {
        const marginTop = - headerHeight * 0.648; // 2% от высоты родителя

        return `${marginTop}px`; 
    };

    const getIcon = (path, ActiveIcon, InactiveIcon) => {
        return location.pathname === path
            ? <ActiveIcon className="svg-container" />
            : <InactiveIcon className="svg-container" />
    };


    return (
        <div className="z-50 h-[9.88625592417062%] flex justify-between item-center">
            <div className="header-container w-full h-[8.88625592417062%] fixed bottom-[-0.4739336492890995%]" ref={headerRef}>
                {/* Домашняя страница */}
                <Link to={'/'}>
                    <div className="flex flex-col items-center">
                        {getIcon('/', HomeActivity, Home)}
                        {location.pathname === '/' && (
                            <div 
                                className="w-[calc(100%+10.25641025641026vw)] h-1 bg-white rounded-bl-[20px] rounded-br-[20px]" 
                                style={{
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
                                className="w-[calc(100%+10.25641025641026vw)] h-1 bg-white rounded-bl-[20px] rounded-br-[20px]" 
                                style={{
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
                                className="w-[calc(100%+10.25641025641026vw)] h-1 bg-white rounded-bl-[20px] rounded-br-[20px]" 
                                style={{
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
                                className="w-[calc(100%+10.25641025641026vw)] h-1 bg-white rounded-bl-[20px] rounded-br-[20px]" 
                                style={{

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
