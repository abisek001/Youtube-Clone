import React from 'react'
import LeftsideBar from '../../Components/Leftside_Bar/LeftsideBar';

function Home() {
  return (
    <div className='app_Page_Container'>
      <LeftsideBar/>
        <div className='app_Page_Items'>
            Home
        </div>
    </div>
  )
}

export default Home