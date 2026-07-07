import { FaGasPump,FaMoneyBillWave,FaWrench } from "react-icons/fa";
import { MdCarRepair  } from "react-icons/md";
    const expData=[
        {
            id:1,
            type:"Truck Repair",
            date: "Today",
            amount: "₹2000",
            number: "Truck: GJ01AB1234",
            icon: <FaWrench />,
            iconColor: "text-red-900",
            iconBgcolor: "bg-red-200",
            iconShColor: "shadow-[0_0_15px_red]",
        },
        {
            id:2,
            type:"fuel",
            date: "Today",
            amount: "₹5000",
            number: "Truck: GJ01AB8772",
            icon: <FaGasPump />,
            iconColor: "text-green-900",
            iconBgcolor: "bg-green-200",
            iconShColor: "shadow-[0_0_15px_green]",
        },
        {
            id:3,
            type: "Driver Salary",
            date: "01-07-2026",
            amount: "₹15000",
            number: "Truck: GJ01AB1234",
            icon: <FaMoneyBillWave />,
            iconColor: "text-blue-900",
            iconBgcolor: "bg-blue-200",
            iconShColor: "shadow-[0_0_15px_blue]",
        },
    ];

export default expData;