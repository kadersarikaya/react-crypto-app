import React, {useEffect, useState} from 'react'
import { Form, FormControl, Table } from 'react-bootstrap'
import axios from 'axios';
import {CoinList} from '../config/api'
import {Pagination} from 'react-bootstrap'

export function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const CoinsTable = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const fetchCoins = async () => {
    setLoading(true);
    const {data} = await axios.get(CoinList("usd"));
    setCoins(data);
    setLoading(false);
  };
  
  let items = [];
  const [state, setState] = useState(1);
  for (let number=1; number <= 10; number++) {
    items.push(
      <Pagination.Item onClick={()=>{setState(number);
      setPage(number);}} 
      key={number} active={number === state}>
      {number}
      </Pagination.Item>,
    );
  }
  console.log(coins);
  useEffect(() => {
    fetchCoins();
  },[])

  const handleSearch = () => {
  return coins.filter((coin)=> coin.name.toLowerCase().includes(query) ||
    coin.symbol.toLowerCase().includes(query))
  }

  return (
    <div className='crypto-list' >
      <div className='market-cap'>Cryptocurrency Prices by Market Cap </div>
       <Form style={{width:"80%", height:"50px"}} className="d-flex">
          <FormControl
            type="search"
            placeholder="Search for a Crypto Currency..."
            className="me-2"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form>
        <div className="table">
      {loading ? <h3 style={{textAlign:"center", color:"white"}}>Loading...</h3> :
      <Table style={{ width: "80%" }} striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {handleSearch().slice((page-1)*10, (page-1)*10 + 10)
          .map((coin, index) => ( 
            <tr key={index}>
                <td>
                  <div className="flex coin-rev">
                    <img className='img-symb' src={coin?.image} alt="" />
                    <div>
                      <h4>{coin?.symbol.toUpperCase()}</h4>
                      <p>{coin?.name}</p>
                    </div>
                  </div>
                </td>
                <td><p className='td-el'>{numberWithCommas(coin?.current_price.toFixed(2))}</p></td>
                <td><p className='td-el' style={{color: coin?.price_change_percentage_24h>0 ? "#0FA235"
                : "red"}} >{coin?.price_change_percentage_24h>0 ? "+" : ""}
                {coin?.price_change_percentage_24h.toFixed(2)}%</p></td>
                <td><p className='td-el'>{numberWithCommas(coin?.market_cap.toString().slice(0, -6))}</p></td>
          </tr>
          ))}
        </tbody>
      </Table>}
    </div>

      <Pagination >{items}</Pagination>
      <br />
  </div>
  )
}

export default CoinsTable