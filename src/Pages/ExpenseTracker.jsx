import { useState } from "react";
import './ExpenseTracker.css';
function ExpenseTracker() {
    const [exp,setExp] = useState([]);
    const [name,setName] = useState("");
    const [amt,setAmt] = useState(0);
    const [total,setTotal] = useState(0);
    const [mess,setMess] = useState("");

    const addExpense = () =>{
        if (name === ""){
            setMess("Please enter the name of your expense")
        }
        else if(amt === 0 || amt<0)
        {
            setMess("The amount of the expense can be number only and greater than 0")
        }
        else{
        setMess("")
        setTotal(Number(total+ Number(amt)));
        const newExp={
            name:name,
            amt:amt
        };
        setExp([...exp,newExp]);
        setName("");
        setAmt(0);}
    }

    const removeExpense = (index,a) => {
        const updatelist = exp.filter((_,i)=> i!==index);
        setExp(updatelist);
        setTotal(Number(total - Number(a)));

    }
    return(
        <div className="card">
            <div className="main-card">
            <h2>Expense Tracker</h2>
            <form>
                <input type="text" placeholder="enter here expense name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <br/>
                <br/>
                <input type="number" placeholder="enter here expense amount" value={amt} onChange={(e)=>{setAmt(e.target.value)}}/>
                <br/>
                <br/>
                <button type="button" onClick={addExpense}>Add Expense</button>
            </form>

            <h3>Expenses List</h3>
            <ul>
                {exp.map((e,index)=>(
                    <li key={index}>{e.name} : {e.amt}
                    <button type="button" onClick={()=>{removeExpense(index,e.amt)}}>delete</button>
                    </li>
                ))}
            </ul>
            <h3>Total Expense: {total}</h3>
            <p className="error">{mess}</p>
            </div>

        </div>
    );
}
export default ExpenseTracker;