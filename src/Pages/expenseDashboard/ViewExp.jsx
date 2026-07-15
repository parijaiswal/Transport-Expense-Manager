import { FiSearch } from "react-icons/fi";
function ViewExp(){

    return(
        <div>
            <div>
                Summary of This Month Expense
                <hr />
                <div className="flex flex-row">
                    <p>Total Expense Fuel Salary Repair</p>
                    <p>₹50,000   ₹20,000  ₹15,000 ₹15,000</p>
                    <hr />
                </div>
            </div>
            <div>
                <div><FiSearch /><input className="border border-2px rounded-[5px]" type="search" placeholder="search here"/></div>

            </div>
        </div>
    );
}
export default ViewExp;