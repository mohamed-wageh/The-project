import './newproduct.css'
import SideBar from '../../dbComponent/sideBar/sideBar';
import Dbheader from '../../dbComponent/Header/Dbheader';
function newproduct() {
    return (
        <div>
            <Dbheader />
            <div className='Box-container'>
                <SideBar />
                <div className="newProduct">
                    <h1 className="addProductTitle">New Product</h1>
                    <form className="addProductForm">
                        <div className="addProductItem">
                            <label>Image</label>
                            <input type="file" id="file" />
                        </div>
                        <div className="addProductItem">
                            <label>Name</label>
                            <input type="text" placeholder="Apple Airpods" />
                        </div>
                        <div className="addProductItem">
                            <label>Description</label>
                            <input type="text" placeholder="Red shoes" />
                        </div>
                        <div className="addProductItem">
                            <label>Categories</label>
                            <input type="text" placeholder="Man,Woman" />
                        </div>
                        <div className="addProductItem">
                            <label>Size</label>
                            <input type="text" placeholder="L,XL" />
                        </div>
                        <div className="addProductItem">
                            <label>Color</label>
                            <input type="text" placeholder="Red" />
                        </div>
                        <div className="addProductItem">
                            <label>Price</label>
                            <input type="text" placeholder="123" />
                        </div>
                        <div className="addProductItem">
                            <label>Stock</label>
                            <input type="text" placeholder="123" />
                        </div>
                        <button className="addProductButton">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default newproduct