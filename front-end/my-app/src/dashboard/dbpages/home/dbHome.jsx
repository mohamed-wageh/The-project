import * as React from 'react';
import Dbheader from '../../dbComponent/Header/Dbheader';
import SideBar from '../../dbComponent/sideBar/sideBar';
import Home from '../../dbpages/body/body';
import '../home/dbHome.css';

function dbHome() {
    return (
        <div>
            <Dbheader />
            <div className='Box-container'>
                <SideBar />
                <Home />
            </div>
        </div >
    );
}

export default dbHome; 