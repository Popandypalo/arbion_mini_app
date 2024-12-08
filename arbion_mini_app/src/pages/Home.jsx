// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import './HomeStyle.css';

const Home = () => {
    const [nickname, setNickname] = useState('');
    const [number, setNumber] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate data fetching
    useEffect(() => {
        setTimeout(() => {
            // Simulate loading nickname and number (replace this with actual API call)
            setNickname('0xNickname');  // Replace with actual logic to fetch the nickname
            setNumber('#133700');        // Replace with actual logic to fetch the number
            setIsLoading(false);         // Data has finished loading
        }, 2000); // 2-second delay to simulate loading
    }, []);

    return (
        <div className="profile-background">
            <div className="custom-block">
                {/* Засветы */}
                <div className="light-1"></div>
                <div className="light-2"></div>
                <div className="light-3"></div>

                {isLoading ? (
                    // While loading, show a gradient square instead of actual text
                    <>
                        <div className="circle"></div>
                        <div className="nickname-placeholder"></div>
                        <div className="number-placeholder"></div>
                    </>
                ) : (
                    <>
                        <div className="circle">{nickname.charAt(0)}</div>
                        <div className="nickname">{nickname}</div>
                        <div className="number">{number}</div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
