import { createContext,useContext,useEffect,useReducer  } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
const API = "https://dummyjson.com/products";
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
  };

const Appprovider  =  ({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState);
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
          const res = await axios.get(url);
          const products = await res.data.products;
          dispatch({type:"SET_API_DATA",payload:products});
          console.log(
            "getProducts ~ products",
            products
          );
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
      };
    
      useEffect(() => {
        getProducts(API);
      }, []);

    return (
    <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
    );
}

//custom hooks
const useProductContext = ()=>{
    return useContext(AppContext);
}

export {Appprovider , AppContext, useProductContext };