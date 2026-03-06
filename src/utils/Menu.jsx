import React from 'react';
import { NavLink } from 'react-router';

const Menu = () => {
    return (
        <div>
            <ul className='lg:flex gap-8 space-y-5 lg:space-y-0 '>
                <li className='hover:text-[#5c5cff]'> <NavLink to="/">Home</NavLink> </li>
                <li className='hover:text-[#5c5cff]'> <NavLink to="test2">Contact</NavLink> </li>
                <li className='hover:text-[#5c5cff]'> <NavLink to="test3">About</NavLink> </li>
                <li className='hover:text-[#5c5cff]'> <NavLink to="test4">SignUP</NavLink> </li>
            </ul>
        </div>
    );
};

export default Menu;