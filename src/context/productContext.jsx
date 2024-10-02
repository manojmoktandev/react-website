import { createContext,useContext,useEffect,useReducer  } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";
import SingleProduct from "../components/SingleProduct";

const AppContext = createContext();
const API = "https://dummyjson.com/products";
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleProductLoading:false,
    singleProduct:[]
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
    
    // get single product 
    const getSingleProduct = async(url)=>{
        dispatch({type:"SET_SINGLE_PRODUCT_LOADING"});
        try{
            const res = await axios.get(url);
            const singleProduct =  await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});
        }
        catch(error){
            dispatch({type:"SET_SINGLE_PRODUCT_ERROR"});
        }
    }
    
      useEffect(() => {
        getProducts(API);
      }, []);

    return (
    <AppContext.Provider value={{...state,getSingleProduct}}>
        {children}
    </AppContext.Provider>
    );
}

//custom hooks
const useProductContext = ()=>{
    return useContext(AppContext);
}

export {Appprovider , AppContext, useProductContext };