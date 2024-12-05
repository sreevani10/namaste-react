import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";


const useRestaurantMenu = (resId)=>{

    const [resInfo,setRestInfo] = useState([]);

    useEffect(()=>{
       fetchData();
    },[])
    
    const fetchData = async ()=>{
        const data = await fetch(MENU_API +resId+"&catalog_qa=undefined");
        const json = await data.json();
        setRestInfo(json.data)
    }
    return resInfo;
}

export default useRestaurantMenu;