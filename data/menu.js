import { RiDashboardFill, RiMessage2Line } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";


export const Menu = [
    {
        title:"Home",
        icon:<RiDashboardFill />,
    },
    {
        title:"Salary",
        icon:<FaRegMoneyBillAlt />,
        submenu:true,
        submenuItems:[
           {
            title:"Item1",
            icon:<FaRegMoneyBillAlt />
           },
           {
            title:"Item2",
            icon:<FaRegMoneyBillAlt />
           },
           {
            title:"Item3",
            icon:<FaRegMoneyBillAlt />
           }
        ]
    },
    {
        title:"Feeds",
        icon:<RiMessage2Line />,
    },
    {
        title:"Leave",
        icon:<RiDashboardFill />,
    },
    {
        title:"Attendance",
        icon:<RiDashboardFill />,
    },
    {
        title:"People",
        icon:<RiDashboardFill />,
    }
    
        
       
]