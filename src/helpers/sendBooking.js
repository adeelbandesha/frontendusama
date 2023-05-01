import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { modalsError } from "./modalsErrors";
import {setServiceLoading} from '../redux/ServiceSlice'

import { useState } from "react";



export const sendBooking = async (formData, navigate, dispatch, setLoginRequire) => {
  let token = localStorage.getItem('token')
  if(token){
      dispatch(setServiceLoading(true))
      await axios({
        method: "post",
        url: "https://profixing-back-production.up.railway.app/orderMail/SndEmail",
        headers: { Authorization: `Bearer ${token}` },
        data: formData,
      })
        .then((res) => {
          if (res.status == 200) {
            toast.success("Service Booked");
            navigate('/')
            console.log("res>>", res);
          }
        })
        .catch((err) => {
          console.log("err>>", err);
          modalsError(err);
        }).finally(()=> {
          dispatch(setServiceLoading(false))
        })
    } else{
      toast.error("Please login to book service")
      setLoginRequire(true)
    }
 
};