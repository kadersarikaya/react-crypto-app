import React from 'react'
import { CryptoState } from "../CryptoContext";
import { Navbar,  Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Header = () => {
  const { currency, setCurrency } = CryptoState();
  return (
    <div className='header'>
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Link to="/" style={{ textDecoration: 'none' }} >
        <Navbar.Brand className='brand' style={{fontSize:"22px", fontWeight:"700", 
        color:"#F99606"}} >
        Crypto Hunter</Navbar.Brand>
      </Link>
      <select onChange={(e) => setCurrency(e.target.value)} value={currency} 
        style={{padding:"5px", width:"70px", fontWeight:600, 
        backgroundColor:"#212529", color:"white", fontSize:"16px"}} name="" id="">
        <option value={"USD"}>USD</option>
        <option value={"EUR"}>EUR</option>
      </select>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header