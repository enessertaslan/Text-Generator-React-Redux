import {configureStore} from '@reduxjs/toolkit';
import textGenSlice from './textGenSlice';

export const store=configureStore({
    reducer:{
        textGen:textGenSlice,
    },
})