import * as React from 'react';
import DbRoute from "../../constatns/DbRoute";
import Dbheader from '../../dbComponent/Header/Dbheader';
import SideBar from '../../dbComponent/sideBar/sideBar';
import Body from '../../dbpages/body/body';
import '../home/dbHome.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from '../userlist/userList';
function dbHome() {
    return (
        <div>
            <Dbheader />
            <div className='Box-container'>
                <SideBar />
                <Body />
            </div>
        </div >
    );
}

export default dbHome; 