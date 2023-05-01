import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



const initialState = {
  step2Validations: true,
  step3Validations: true,
  bookService: {},
  serviceLoading: false
};

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    step2ValidationsChange: (state, action)=> {
        state.step2Validations = action.payload
    },
    step3ValidationsChange: (state, action)=> {
        state.step3Validations = action.payload
    },
    setBookServiceData: (state, action)=> {
        state.bookService = {
            ...state.bookService,
            ...action.payload
        }
    },
    setServiceLoading: (state, action)=>{
        state.serviceLoading = action.payload
    }
  }
});

export default serviceSlice.reducer;
export const { step2ValidationsChange, step3ValidationsChange, setBookServiceData, setServiceLoading } = serviceSlice.actions;