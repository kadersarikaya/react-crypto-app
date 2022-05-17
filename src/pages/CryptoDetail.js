import React from 'react'
import Header from '../components/Header';
import { SingleCoin } from "../config/api";
import { numberWithCommas } from '../components/CoinsTable';
import { CryptoState } from "../CryptoContext";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import CoinInfo from '../components/CoinInfo';

const CryptoDetail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
  
    setCoin(data);
  };
  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if(!coin) return (
    <div className="crypto-list">
      <Spinner animation="border" size="lg" variant="warning" />
    </div>
  );
   
  return (
    <>
      <Header />
      <div className="flex coin-detail">
        <div className="sidebar">
          <img
            className="coin-logo"
            src={coin?.image.large}
            alt={coin?.name}
            height="200"
            style={{ marginBottom: 20 }}
          />
          <div className="desc-detail">
            <h3>{coin?.name}</h3>
            <div className="flex">
              <div className="desc-title">Rank: </div>
              &nbsp;
              <h5> {numberWithCommas(coin?.market_cap_rank)} </h5>
            </div>
            <div className="flex">
              <div className="desc-title">Current Price: </div>
               &nbsp;
              <h5>
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </h5>
            </div>
            <div className="flex">
              <div className="desc-title">Market Cap: </div>
               &nbsp;
              <h5>
                {symbol}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
                M
              </h5>
            </div>
          </div>
        </div>
        <CoinInfo coin={coin} />
      </div>
    </>
  );
}

export default CryptoDetail