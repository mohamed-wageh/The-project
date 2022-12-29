import "./userList.css"
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import SideBar from '../../dbComponent/sideBar/sideBar';
import Dbheader from '../../dbComponent/Header/Dbheader';
import axios from "axios";

export default function UserList() {
    const [user, setUser] = useState([]);
    useState(() => {
        const fetchUsers = async () => {
            const { data } = await axios.get('/users')
            setUser(data)
        }
        fetchUsers()
    }, [])

    const handleDelete = (id) => {
        setUser(user.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "firstName", headerName: "firstName", width: 90 },
        {
            field: "lastName",
            headerName: "lastName",
            width: 120,
        },
        {
            field: "image",
            headerName: "photo",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: "phone",
            headerName: "phone",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to="/dashboard/user/:userId">
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];
    return (
        <div>
            <Dbheader />
            <div className='Box-container'>
                <SideBar />
                <div className="userList">
                    <DataGrid
                        getRowId={(row) => row._id}
                        rows={user}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={8}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    )
}

