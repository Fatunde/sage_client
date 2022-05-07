import React from 'react'
import {InputGroup, Input} from "reactstrap"
import { Contexts } from './context';
import { Icon } from '@iconify/react';


export default function Navbar () {
    const { search } = Contexts()

    return(
        <header>
        <div className="header-left">
             
            <div className="search-wrapper lf">
              <InputGroup >
               <span className="iconify-inline"><Icon icon="bx:bx-search"/></span>
                <Input placeholder="Search..." onChange={e => search(e.target.value)}/>
              </InputGroup>
            </div>
      
        </div>
        </header>
    )}
