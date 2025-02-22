import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
const loggedIn = { firstName: 'Omkar',lastName:'Bhujbalrao',email:'omkarbhujbalrao@gmail.com'};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type='greeting'
          title='Welcome'
          user={loggedIn?.firstname || 'Guest'}
          subtext='Access and Manage your Account and Transactions Efficiently.'
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250}/>
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:1234},{currentBalance:4567}]}/>
    </section>
  )
}

export default Home