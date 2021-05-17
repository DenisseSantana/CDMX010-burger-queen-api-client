import React from 'react';
import BurguerText from '../../assets/logoDos.png'
import UserIcon from '../../assets/userIcon.png'
export function Header () {
    return (
        <div>
            <header  className="headerComponent" >
                <img src={BurguerText} alt='Burguer Queen Text' className='logoText'/>
                <img src={UserIcon} alt='Burguer Queen Text' className='userIcon'/>      
            </header>
        </div>
    )
}