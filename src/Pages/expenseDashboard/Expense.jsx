import SideBar from "../../components/SideBar";
import AddExpense from "./AddExpense";
import ViewExp from "./ViewExp";
function Expense(){
    return(
        <>
        <ViewExp />
        <AddExpense />
        </>
    );
}
export default Expense;