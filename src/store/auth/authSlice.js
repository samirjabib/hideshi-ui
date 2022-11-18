import { createSlice } from '@reduxjs/toolkit';




export const authSlice = createSlice({
    name: 'auth',

    initialState: {
    status:'checking',  // 'authenticated','not-authenticated',
    user:{},
    errorMessage:undefined,
    },

    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },

        onLogin : ( state ) => {
            state.status = 'aunthenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },

        onLogout : ( state ) => {
            state.status = ' not-authenticated';
            state.user = {};
            state.errorMessage = undefined;
        },

        clearErrorMessage : ( state ) => {
            state.errorMessage = undefined;
        }


    }
});