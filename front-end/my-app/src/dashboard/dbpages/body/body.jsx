import "../body/body.css"
import Stat from "../../dbComponent/stat/stat"
import Chart from "../../dbComponent/chart/chart";
import { userData } from "../../dummyData";
import Table from "../../dbComponent/table/table"

export default function home() {
    return (
        <div className="body">
            <div className="statContianer">
                <Stat type="user" />
                <Stat type="order" />
                <Stat type="earning" />
                <Stat type="balance" />
            </div>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <div className="listTitle">Latest Transactions</div>
                <Table />
            </div>
        </div>
    )
}
