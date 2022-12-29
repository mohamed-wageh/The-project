import './productList.css'
import SideBar from '../../dbComponent/sideBar/sideBar';
import Dbheader from '../../dbComponent/Header/Dbheader';
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import getProducts from '../../../services/services';
import axios from "axios";
import { useDispatch } from "react-redux";
export default function ProductList() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);
    useState(() => {
        const fetchUsers = async () => {
            const { data } = await axios.get('/products')
            setProducts(data)
        }
        fetchUsers()
    }, [])

    const handleDelete = (id) => {
        setProducts(products.filter((item) => item.id !== id));
    };
    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        { field: "name", headerName: "name", width: 90 },
        { field: "description", headerName: "description", width: 90 },
        { field: "categories", headerName: "categories", width: 90 },
        { field: "size", headerName: "size", width: 90 },
        {
            field: "image",
            headerName: "photo",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.image} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "inStock", headerName: "Stock", width: 200 },
        {
            field: "color",
            headerName: "color",
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
                    {products.length && <DataGrid getRowId={(row) => row._id}
                        rows={products}
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