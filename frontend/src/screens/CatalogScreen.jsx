
import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { CatalogDetailModal, CatalogTable } from "../components";

export function CatalogScreen(){

  const [list,setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal , setOpenModal] = useState(false);
  const [selectedItemID , setSelectedItemID] = useState();

  const fetchData = ()=>{
    setLoading(true);
    axios.get("/catalog")
    .then((res)=>{
      setList(res.data.data);
    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      setLoading(false);
    })
  };

  const onClickRow=(item)=>{
    setSelectedItemID(item.id);
    setOpenModal(true);
  }

  const onCloseModal=()=>{
    setSelectedItemID(null);
    setOpenModal(false);
  }

  useEffect(()=>{
    fetchData();
    return()=>{};
  },[])
  return (
    <div className="flex items-center justify-center h-full bg-white rounded-lg relative">
      <CatalogTable
        list ={list}
        loading = {loading}
        onClickRow = {onClickRow}
      />
      <CatalogDetailModal
        id      = {selectedItemID}  
        open    = {openModal}
        onClose = {onCloseModal}
      />
    </div>
  )
}