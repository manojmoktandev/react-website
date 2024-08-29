import React from "react";
import Herosection from "../components/Herosection";
import { useProductContext } from "../context/productContext";

const About = () => {
  const {name} = useProductContext();
    const data = {
      name:'Temu eccomerce'
    }
    return (<>
    {name}
    <Herosection data={data} />
    </>
    );
};
  
export default About;