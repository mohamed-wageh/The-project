import '../dbComponent/stat.css';
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function stat() {
    return (
        <div className='stat'>
            <div className="statItem">
                <span className="statTitle">Total Products</span>
                <div className="statMoneyContainer">
                    <span className="statMoney">$2,122</span>
                    <span className="statMoneyRate">
                        11.4  <ArrowDownward className="statIcon negative" />
                    </span>
                </div>
                <span className="statSub">Compared to last months</span>
            </div>
            <div className="statItem">
                <span className="statTitle">Total Store Value</span>
                <div className="statMoneyContainer">
                    <span className="statMoney">$2,122</span>
                    <span className="statMoneyRate">
                        11.4  <ArrowDownward className="statIcon negative" />
                    </span>
                </div>
                <span className="statSub">Compared to last months</span>
            </div>
            <div className="statItem">
                <span className="statTitle">The Sold</span>
                <div className="statMoneyContainer">
                    <span className="statMoney">$2,122</span>
                    <span className="statMoneyRate">
                        11.4  <ArrowUpward className="statIcon negative" />
                    </span>
                </div>
                <span className="statSub">Compared to last months</span>
            </div>
        </div>
    )
}
