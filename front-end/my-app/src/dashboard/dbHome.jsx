import * as React from 'react';
import Dbheader from './dbComponent/Dbheader';
import SideBar from './dbComponent/sideBar';
import '../dashboard/dbHome.css';

function dbHome() {
    return (
        <div>
            <Dbheader />
            <div className='container'>
                <SideBar />
                <div className='other'>other pages</div>
            </div>
        </div >
    );
}

export default dbHome; 