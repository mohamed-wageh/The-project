import './productList.css'
import SideBar from '../../dbComponent/sideBar/sideBar';
import Dbheader from '../../dbComponent/Header/Dbheader';
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import getProducts from '../../../services/services';
export default function ProductList() {
    useEffect(() => {
        getProducts().then(p => setData(p.data)).catch(err => console.log('err', err))

    }, [])

    const [data, setData] = useState([]);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    console.log('data', data);
    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
            field: "name",
            headerName: "product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListUser">
                        <img className="productListImg" src={params.row.image} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "inStock", headerName: "Stock", width: 200 },
        {
            field: "brand",
            headerName: "brand",
            width: 120,
        },
        {
            field: "price",
            headerName: "price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to="/dashboard/product">
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
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
                <div className="productList">
                    {data.length && <DataGrid getRowId={(row) => row._id}
                        rows={data}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={8}
                        checkboxSelection
                    />}
                </div>
            </div>
        </div>
    );
}