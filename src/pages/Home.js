import React from 'react'
import Brand from '../components/Banner'
import CoinsTable from '../components/CoinsTable'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <Brand />
      <CoinsTable />
    </div>
  );
}

export default Home