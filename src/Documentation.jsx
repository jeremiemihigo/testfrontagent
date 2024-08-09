/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from "react";
import Popup from "./Control/Popup";
import Header from "./Header";
import "./message.css";
import VoirPlus from "./VoirPlus";

function Chat() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Header />
      <div style={{ padding: "10px" }}>
        <div className="titre">
          <img src="/bboxx.png" alt="bboxxPages" />
          <p>Documentation</p>
        </div>
        <div style={{ marginTop: "12px" }}>
          <p className="titreName">
            Hello
            <strong>
              {" " +
                localStorage.getItem("nom").split(" ")[
                  localStorage.getItem("nom").split(" ").length - 1
                ]}
            </strong>
            !! Ce message concerne la manière dont vous devez compléter le champ
            feedback du client.
          </p>

          <ol>
            <li>
              En complétant ce champ, la plateforme vous propose une liste de
              feedbacks similaires à ce que vous écrivez.{" "}
              <span
                onClick={() => setOpen(true)}
                style={{ color: "blue", cursor: "pointer", marginLeft: "10px" }}
              >
                plus
              </span>
            </li>
            <li>
              Si le feedback existe dans la liste proposée, veuillez cliquer
              dessus et continuer la suite
            </li>
          </ol>
          <p className="tittreQuestion">
            Si le feedback n&apos;est pas dans la liste proposée
          </p>
          <ol>
            <li>
              Cliquer sur <strong>Mentionnez le feedback</strong> et
            </li>
            <li>
              Remplissez le champs <strong>Feedback</strong>
            </li>
          </ol>
        </div>
        <div></div>
        <Popup
          open={open}
          setOpen={setOpen}
          title="Tous les feedback possibles"
        >
          <VoirPlus />
        </Popup>
      </div>
    </>
  );
}

export default Chat;
