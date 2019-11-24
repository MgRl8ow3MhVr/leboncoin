import React, { useState, useEffect } from "react";
import axios from "axios";
import Carrousel from "../components/Carrousel";
import { ArrowBackIos } from "@material-ui/icons";

import { Link, useParams } from "react-router-dom";

const OneOffer = props => {
  const obj = useParams();
  const id = obj.id;

  const [dataoffer, setDataoffer] = useState({ _id: null });

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(props.apiAddress + "/oneoffer/" + id);
      setDataoffer(response.data);
    };
    fetchData();
  }, []);

  if (dataoffer._id === null) {
    return <div>loading</div>;
  } else {
    return (
      <>
        <div className="oneoffer">
          <div className="descriptionblock">
            <Carrousel pics={dataoffer.pictures} />
            <hr />

            <ul>
              <span>{dataoffer.title}</span>
              <br />
              <span>{dataoffer.price} €</span>
              <br />
              <span>
                {dataoffer.created.slice(0, 10)} à{" "}
                {dataoffer.created.slice(11, 19)}
              </span>
            </ul>
            <h2>Description</h2>
            <p>{dataoffer.description}</p>
          </div>
          <div className="rightside">
            <Link to="/offers">
              <div className="back">
                <ArrowBackIos />
                Retour à la recherche
              </div>
            </Link>
            <div className="userInfos">
              <div>{dataoffer.creator.account.username}</div>
              <div>17 Annonces en ligne</div>
              <span className="orangeBox">Acheter</span>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default OneOffer;
