import './sideBar.css'
import { NotificationsActive, Logout, Person, LineStyle, Timeline, TrendingUp, AddBusinessOutlined, PermIdentity, Storefront, PersonAddAltOutlined } from '@mui/icons-material';
import { Link } from "react-router-dom";
export default function sideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Main Menu</h3>
                    <ul className="siderbarlist">
                        <Link to="/dashboard" className="link">
                            <li className="sidbarlistitem">
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>

                        <h3 className="sidebarTitle">User Menu</h3>
                        <Link to="/dashboard/users" className="link">
                            <li className="sidbarlistitem">
                                <PermIdentity className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to="/dashboard/user/newUser" className="link">
                            <li className="sidbarlistitem">
                                <PersonAddAltOutlined className='sidebarIcon' />
                                New User
                            </li>
                        </Link>
                        <h3 className="sidebarTitle">Product Menu</h3>
                        <Link to="/dashboard/productList" className="link">
                            <li className="sidbarlistitem">
                                <Storefront className='sidebarIcon' />
                                Product
                            </li>
                        </Link>
                        <Link to="/dashboard/newproduct" className="link">
                            <li className="sidbarlistitem">
                                <AddBusinessOutlined className='sidebarIcon' />
                                New Product
                            </li>
                        </Link>
                        <li className="sidbarlistitem">
                            <NotificationsActive className='sidebarIcon' />
                            Notification
                        </li>
                        <h3 className="sidebarTitle">Account</h3>
                        <Link to="/dashboard/user/:userId" className="link">
                            <li className="sidbarlistitem">
                                <Person className='sidebarIcon' />
                                Profile
                            </li>
                        </Link>
                        <li className="sidbarlistitem">
                            <Logout className='sidebarIcon' />
                            Log Out
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
