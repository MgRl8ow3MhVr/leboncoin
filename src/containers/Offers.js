//import librarues
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//import components
import Pages from "../components/Pages";
import SearchBar from "../components/SearchBar";
import OffersItem from "../components/OffersItem";

// creation d'un tableau des pages

const Offers = () => {
  const [pageNum, setpageNum] = useState(1); //current page
  const itemsPerPage = 5;
  const [data, setData] = useState({ count: 0, offers: [] });
  const [searchTerm, setsearchTerm] = useState("");

  console.log("ici", searchTerm);

  //Fecth Data only at first load
  useEffect(() => {
    const fetchData = async () => {
      const pagination = `?skip=${(pageNum - 1) *
        itemsPerPage}&limit=${itemsPerPage}`;
      let response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/with-count" +
          pagination +
          "&title=" +
          searchTerm
      );
      setData(response.data);
    };
    fetchData();
  }, [pageNum, searchTerm]);

  // Here starts the render
  if (!data.count) {
    return <SearchBar setsearchTerm={setsearchTerm} />;
  } else {
    return (
      <>
        <SearchBar setsearchTerm={setsearchTerm} />
        <div className="offers">
          {data.offers.map((oneoffer, index) => {
            return (
              <Link key={index} to={"/oneoffer/" + oneoffer._id}>
                <OffersItem {...oneoffer} />
              </Link>
            );
          })}

          <Pages
            itemsPerPage={itemsPerPage}
            offersNumber={data.count}
            setpageNum={setpageNum}
          />
        </div>
      </>
    );
  }
};
export default Offers;
