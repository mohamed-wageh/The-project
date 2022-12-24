import * as React from 'react';
import Dbheader from './dbComponent/Dbheader';
import SideBar from './dbComponent/sideBar';
import Home from './dbpages/home';
import '../dashboard/dbHome.css';

function dbHome() {
    return (
        <div>
            <Dbheader />
            <div className='BOx-container'>
                <SideBar />
                <Home />
            </div>
        </div >
    );
}

export default dbHome; 