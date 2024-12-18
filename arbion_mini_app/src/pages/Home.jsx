import React, { useEffect, useState } from "react";
import './HomeStyle.css';
import Deposit from "../assets/icons/Deposit";
import Payout from "../assets/icons/Payout";
import EXP from "../assets/icons/EXP";
import Graph from "../components/ui/Graph";
import Grid from "../assets/icons/grid";
import Stacking from "../assets/icons/Stacking";
import RWA from "../assets/icons/RWA";
import BOT from "../assets/icons/BOT";

const Home = () => {
    const [nickname, setNickname] = useState('');
    const [number, setNumber] = useState(null);
    const [balance, setBalance] = useState(null);
    const [exp, setExp] = useState(null);
    const [prices, setPrices] = useState({ stacking: null, rwa: null, bot: null });
    const [isLoading, setIsLoading] = useState(true);

    const dataDict = {
        1: 65,
        5: 59,
        10: 80,
        15: 81,
        20: 56,
    };

    // Simulate data fetching
    useEffect(() => {
        setTimeout(() => {
            setNickname('0xNickname');  // Replace with actual logic to fetch the nickname
            setNumber('#133700');        // Replace with actual logic to fetch the number
            setBalance('138.312.41259'); // Replace with actual logic to fetch the balance
            setExp(150);                 // Replace with actual logic to fetch the exp
            setPrices({
                stacking: '120,350 $',
                rwa: '10,000 $',
                bot: '3,000 $'
            });
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

            {/* Condition Block */}
            <div className="condition-container">
                <div className="condition">
                    <div className="condition-title">Your condition</div>

                    <div className="condition-content">
                        <div className="circle-large"></div>
                        {isLoading ? (
                            <div className="balance-placeholder"></div>
                        ) : (
                            <div className="balance">{balance}</div>
                        )}
                    </div>

                    <div className="condition-content2">
                        <div className="circle-small"><EXP /></div>
                        {isLoading ? (
                            <div className="exp-container-place"><div className="exp-placeholder"></div></div>
                        ) : (
                            <div className="exp-text">{exp}</div>
                        )}
                        <button className="claim-button">Claim</button>
                        <div className="circle-icon">24h</div>
                    </div>
                </div>

                <div className="condition-right">
                    <div className="deposit">
                        <div className="deposit-icon">
                            <Deposit />
                        </div>
                        <div className="deposit-text">Deposit</div>
                    </div>

                    <div className="payout">
                        <div className="payout-icon">
                            <Payout />
                        </div>
                        <div className="payout-text">Payout</div>
                    </div>
                </div>
            </div>

            <div className="graph-cont"><Graph dataDict={dataDict}/></div>
            <div className="asdad">
                <div className="grid">
                    <Grid></Grid>
                </div>
                <div className="grid-layer">
                    <div className="header">
                        <h1>Purchased serviced</h1>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col icon">
                                <Stacking></Stacking>
                            </div>
                            <div className="col text">
                                Stacking
                            </div>
                            <div className="col price">
                                {isLoading ? (
                                    <div className="price-placeholder"></div>
                                ) : (
                                    prices.stacking
                                )}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col icon">
                                <RWA></RWA>
                            </div>
                            <div className="col text">
                                RWA
                            </div>
                            <div className="col price">
                                {isLoading ? (
                                    <div className="price-placeholder"></div>
                                ) : (
                                    prices.rwa
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col icon">
                                <BOT></BOT>
                            </div>
                            <div className="col text">
                                Trading Bot
                            </div>
                            <div className="col price">
                                {isLoading ? (
                                    <div className="price-placeholder"></div>
                                ) : (
                                    prices.bot
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
