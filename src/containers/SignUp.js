import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { CheckBox } from "@material-ui/icons";

const sendSignUp = async (email, password, pseudo, loginOK) => {
  try {
    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/api/user/sign_up",
      {
        email: email,
        username: pseudo,
        password: password
      }
    );
    // let user = response.data.account.username;
    console.log(response.data);

    loginOK(response.data.account.username);
  } catch (error) {
    alert("ERROR", error.message);
  }
};

const SignUp = props => {
  const { loginOK } = props;
  const history = useHistory();
  const [pseudo, setPseudo] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  return (
    <div className="signuppage">
      <form
        onSubmit={event => {
          event.preventDefault();
          if (password === password2) {
            sendSignUp(email, password, pseudo, loginOK);
            alert("Well Done Bro");
            history.push("/");
          } else {
            alert("les mots de passe sont différents");
          }
        }}
      >
        <h1>Creez un compte</h1>
        <hr></hr>
        <h2>pseudo</h2>
        <input
          placeholder="pseudo"
          value={pseudo}
          type="text"
          onChange={event => {
            setPseudo(event.target.value);
          }}
        ></input>
        <h2>email</h2>

        <input
          placeholder="email"
          value={email}
          type="text"
          onChange={event => {
            setEmail(event.target.value);
          }}
        ></input>
        <div className="passwordbox">
          <div>
            <h2>mot de passe</h2>
            <input
              placeholder="mot de passe"
              value={password}
              type="text"
              onChange={event => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <h2>confirmer le mot de passe</h2>
            <input
              placeholder="confirmer"
              value={password2}
              type="text"
              onChange={event => {
                setPassword2(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="conditions">
          <CheckBox />
          <span>J'accepte les conditions</span>
        </div>

        <input type="submit" value="Creer mon compte personnel" />
      </form>
    </div>
  );
};
export default SignUp;
