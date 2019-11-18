import React from "react";
import { Link } from "react-router-dom";
import OffersItem from "../components/OffersItem";

// creation d'un tableau des pages

const Offers = props => {
  const { data, itemsPerPage, setpageNum } = props;

  let pagesArr = [];
  for (let i = 1; i < Math.floor(data.count / itemsPerPage) + 2; i++) {
    pagesArr.push(i);
  }

  return (
    <div className="offers">
      {data.offers.map((oneoffer, index) => {
        return (
          <Link key={index} to={"/oneoffer/" + oneoffer._id}>
            <OffersItem {...oneoffer} />
          </Link>
        );
      })}

      <ul className="pages">
        {pagesArr.map((pageNumber, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setpageNum(pageNumber);
              }}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Offers;
