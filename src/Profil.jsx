/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { Input } from "antd";
import axios from "axios";
import React from "react";
import { CreateContexte } from "./Context";
import Header from "./Header";
import { lien } from "./Static";

function Profil() {
  const { title } = React.useContext(CreateContexte);

  const [initial, setInitial] = React.useState();
  const [sendIng, setSendIng] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const change = (e) => {
    setMessage("");
    const { name, value } = e.target;
    setInitial({
      ...initial,
      [name]: value,
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    setSendIng(true);
    setMessage("");
    try {
      const response = await axios.put(lien + "/userId", {
        codeAgent: localStorage.getItem("codeAgent"),
        ancien: initial?.ancien,
        nouvelle: initial?.nouvelle,
      });
      if (response.status === 200) {
        localStorage.removeItem("auth");
        window.location.replace("/");
      } else {
        setMessage("Identification incorrect");
      }
      setSendIng(false);
    } catch (error) {
      console.log(error);
      setSendIng(false);
    }
  };
  return (
    <>
      <Header />
      <div style={{ padding: "15px" }}>
        <div className="titre">
          <img src="/bboxx.png" alt="bboxxPages" />
          <p> {title}</p>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <Input
            placeholder="Nom"
            disabled
            value={localStorage.getItem("nom")}
          />
        </div>
        <Input
          placeholder="Code Agent"
          disabled
          value={localStorage.getItem("codeAgent")}
        />
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontSize: "12px",
            fontWeight: "bolder",
          }}
        >
          Modifiez le mot de passe
        </p>
        {message !== "" && (
          <p
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              color: "red",
              fontSize: "10px",
              margin: "10px",
            }}
          >
            {message}
          </p>
        )}
        <div style={{ marginTop: "10px" }}>
          <Input
            placeholder="Ancien mot de passe"
            name="ancien"
            onChange={(e) => change(e)}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Input
            onChange={(e) => change(e)}
            placeholder="Nouveau mot de passe"
            name="nouvelle"
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button
            variant="contained"
            disabled={sendIng}
            color="primary"
            fullWidth
            onClick={(e) => sendData(e)}
          >
            Modifiez
          </Button>
        </div>
      </div>
    </>
  );
}

export default Profil;
