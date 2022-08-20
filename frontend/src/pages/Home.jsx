import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { getAllUserAction } from "../action/user-action"; 
import Pagination from "./Pagination";
export default function Home() {
    const dispatch = useDispatch()
    const { userredux, isloading } = useSelector(state => state.userData)
     
    useEffect(() => {
        dispatch(getAllUserAction())
    },[])
    return<div className=" alert alert-info">
         
       <Pagination/>
    </div>
}