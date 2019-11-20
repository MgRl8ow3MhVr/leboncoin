import React, { useState } from "react";
import axios from "axios";
import MyDropzone from "../components/MyDropzone";

const Upload = props => {
  const { token } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [filePhoto, setFilePhoto] = useState("");
  const [onePhoto, setonePhoto] = useState();

  return (
    <div className="publish formpage">
      <form
        onSubmit={async event => {
          event.preventDefault();
          //formadata va permettre de preparer le fichier pour pouvoir l'envoyer

          try {
            const data = new FormData(); // cree une variable data qui est un objet de type FormData
            data.append("title", title); //permet d'inserer title dans data
            data.append("description", description);
            data.append("price", price);
            data.append("files", filePhoto); // Inserer le fichier 'file' selectionné par l'utilisateur

            const response = await axios.post(
              "https://leboncoin-api.herokuapp.com/api/offer/publish",
              data,
              {
                headers: {
                  // on a besoin de transmettre le token dans le heaer AUthorization
                  // le serveur s'en servira pour authenti l'utilisateur
                  Authorization: `Bearer ${token}`
                }
              }
            );
            console.log(response.data);
          } catch (error) {
            console.log(error.message);
            alert("Error");
          }
        }}
      >
        <h1>Déposer une annonce</h1>
        <hr></hr>
        <h2>Titre de l'annonce*</h2>
        <input
          type="text"
          value={title}
          onChange={event => {
            setTitle(event.target.value);
          }}
        ></input>
        <h2>Texte de l'annonce*</h2>
        <input
          type="text"
          value={description}
          onChange={event => {
            setDescription(event.target.value);
          }}
        ></input>
        <h2>Prix*</h2>
        <input
          type="text"
          value={price}
          onChange={event => {
            setPrice(event.target.value);
          }}
        ></input>
        <h2>Photo*</h2>
        {/* <input
          type="file"
          multiple={true} //permet de secetionner plusieurs fichiers
          // n'a pas de value
          onChange={event => {
            // type file on utilise event target files. Voir ce que Value donne pour tester
            //tableau
            setFilePhoto(event.target.files[0]);
          }}
        ></input> */}

        <MyDropzone
          loadFile={photo => {
            setFilePhoto(photo);
          }}
        ></MyDropzone>

        <input type="submit" value="valider"></input>
      </form>
    </div>
  );
};
export default Upload;
