import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { Contexts } from './context';



export default function SideBar() {
    const { state, set_favourite } = Contexts()

    return(
    <div className="sidebar">

        <div className="sidebar-menu">
            <ul>
                {state.favourites.length ?  state.favourites.map((item, index) =>(<li key={index}>
                   <div className='row'> <Link to={`character?id=${index+1}`}> <span className="iconify-inline"><Icon icon="bx:bxs-bar-chart-square" /></span> 
                    <span>{item.name}</span></Link> <span className="iconify-inline ml-3 mt-0" onClick={e => {e.preventDefault(); set_favourite(item, "remove")}}><Icon icon="typcn:cancel" /></span> </div>
                </li>)) : <h4>You have not favourite</h4>}
            </ul>
        </div>

    </div>
    )}