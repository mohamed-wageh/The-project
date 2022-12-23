import React from 'react'
import './dbHeader.css'
import { Notifications, Language, Settings } from '@mui/icons-material';

function Dbheader() {
    return (
        <div className='Dbheader'>
            <div className="DbheaderWrapper">
                <div className="topleft">
                    <span className="logo">ELWEKALA ADMIN</span>
                </div>
                <div className="topright">
                    <div className="topiconContainer">
                        <Notifications />
                        <span className="topiconbadge">2</span>
                    </div>
                    <div className="topiconContainer">
                        <Language />
                        <span className="topiconbadge">2</span>
                    </div>
                    <div className="topiconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Dbheader;