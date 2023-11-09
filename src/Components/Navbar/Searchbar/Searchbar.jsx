import React from 'react'
import './Searchbar.css';
import {FaSearch} from 'react-icons/fa';
import {BsMicFill} from 'react-icons/bs';

function Searchbar() {
  return (
    <div className='search_Container'>
        <div className="searchBar">
            <input type="search" placeholder="Search"  className="searchInput" aria-label="Search"/>
            <FaSearch className='searchIcon' />
        </div>
        <BsMicFill className='micIcon'/>
    </div>
  )
}

export default Searchbar