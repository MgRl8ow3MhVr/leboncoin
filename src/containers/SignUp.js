import React, { useState } from "react";
import axios from "axios";

const sendSignUp = async (email, password, pseudo) => {
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
    alert("OK cest fait");
    // loginOK(user);
  } catch {
    alert("ERROR");
  }
};

const SignUp = () => {
  const [pseudo, setPseudo] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="signuppage">
      <form
        onSubmit={event => {
          event.preventDefault();
          // console.log("here is", pseudo, email, password);
          sendSignUp(email, password, pseudo);
        }}
      >
        <input
          placeholder="pseudo"
          value={pseudo}
          type="text"
          onChange={event => {
            setPseudo(event.target.value);
          }}
        ></input>
        <input
          placeholder="email"
          value={email}
          type="text"
          onChange={event => {
            setEmail(event.target.value);
          }}
        ></input>
        <input
          placeholder="mot de passe"
          value={password}
          type="text"
          onChange={event => {
            setPassword(event.target.value);
          }}
        ></input>

        <input type="submit" value="Creer mon compte personnel" />
      </form>
    </div>
  );
};
export default SignUp;

// testpierre
// pierre@pierre.com
// azerty

// testpierre2
// pierre2@pierre.com
// qwerty
// testpierre2
// pierre2@pierre.com
// qwerty
