import React from 'react'

import { Navbar,  Container } from 'react-bootstrap'
const Header = () => {
  return (
    <>
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand style={{fontSize:"22px", fontWeight:"700", color:"#F99606"}} >Crypto Hunter</Navbar.Brand>
      <select style={{padding:"5px", width:"70px", fontWeight:600, 
        backgroundColor:"#212529", color:"white", fontSize:"16px"}} name="" id="">
        <option value="USD">USD</option>
        <option value="TL">TL</option>
      </select>
      </Container>
    </Navbar>
    </>
  )
}

export default Header