import { configureStore } from '@reduxjs/toolkit'; 
import reducer from '../Slice/slice'; 

const store = configureStore({ 
    reducer: { store: reducer, }, 
}); 

export default store; 
export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;