import './sideBar.css'
import { NotificationsActive, Logout, Person, LineStyle, Timeline, TrendingUp, BarChart, PermIdentity, Storefront, AttachMoney } from '@mui/icons-material';

export default function sideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Main Menu</h3>
                    <ul className="siderbarlist">
                        <li className="sidbarlistitem">
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
                        <li className="sidbarlistitem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidbarlistitem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                        <h3 className="sidebarTitle">Other Menu</h3>
                        <li className="sidbarlistitem">
                            <PermIdentity className='sidebarIcon' />
                            Users
                        </li>
                        <li className="sidbarlistitem">
                            <Storefront className='sidebarIcon' />
                            Product
                        </li>
                        <li className="sidbarlistitem">
                            <AttachMoney ndingUp className='sidebarIcon' />
                            Transactions
                        </li>
                        <h3 className="sidebarTitle">Service</h3>
                        <li className="sidbarlistitem">
                            <BarChart className='sidebarIcon' />
                            Orders
                        </li>
                        <li className="sidbarlistitem">
                            <NotificationsActive className='sidebarIcon' />
                            Notification
                        </li>
                        <h3 className="sidebarTitle">Account</h3>
                        <li className="sidbarlistitem">
                            <Person className='sidebarIcon' />
                            Profile
                        </li>
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
