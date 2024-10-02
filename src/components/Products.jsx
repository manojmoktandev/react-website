import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper/FormatPrice";

const Products = (currElem) => {
  const { id, title, images, price, category } = currElem;
    return(
      <NavLink to={`/singleproduct/${id}`}>
          <div className="card">
            <figure>
              <img src={images} alt={title} />
              <figcaption className="caption">{category}</figcaption>
            </figure>

            <div className="card-data">
              <div className="card-data-flex">
                <h3>{title}</h3>
                <p className="card-data--price">{<FormatPrice price={price}/>}</p>
              </div>
            </div>
          </div>
      </NavLink>
        
    );
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;