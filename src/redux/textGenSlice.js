import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchParagraph=createAsyncThunk('', async (data) => {
    const res=await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}paras=${data.paras}&format=${data.type}`)
    console.log(data.paras)
    console.log(data.type)
    return await res.data;
} )

export const textGenSlice=createSlice({
    name:'textGen',
    initialState:{
        text:[],
        type:'text',
    },
    reducers:{
    },
    extraReducers:{
        [fetchParagraph.fulfilled] : (state,action)=>{
            state.text=[action.payload];
            console.log(state.text)
        },
        [fetchParagraph.pending] : (state,action)=>{
            console.log('loading');
        },
        [fetchParagraph.rejected] : (state,action)=>{
            console.log(action.payload);
        },
    }
})
export default textGenSlice.reducer;