/* eslint-disable react/prop-types */
import { Paper, Typography } from "@mui/material";
import { Input, message } from "antd";
import moment from "moment";
import React from "react";
import ImageComponent from "../Control/Image";
import Popup from "../Control/Popup";
import FormReclamation from "../FormReclamation";
import { lien_image } from "../Static";
import "../style.css";
import Action from "./Action";

function Liste({ donner }) {
  const [validates, setValidate] = React.useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [openAction, setOpenAction] = React.useState(false);
  const success = (texte) => {
    navigator.clipboard.writeText(texte);
    messageApi.open({
      type: "success",
      content: "Done " + texte,
      duration: 2,
    });
  };
  const [open, setOpen] = React.useState(false);
  const [_id, setId] = React.useState();

  const openPopup = (index, e) => {
    e.preventDefault();
    setId(index);
    setOpen(true);
  };
  const [filterFn, setFilterFn] = React.useState({
    fn: (items) => {
      return items;
    },
  });
  const handleChange = (e) => {
    let target = e.target.value.toUpperCase();

    setFilterFn({
      fn: (items) => {
        if (target === "") {
          return items;
        } else {
          return items.filter((x) => x.reponse[0].codeclient.includes(target));
        }
      },
    });
  };
  const [clientSelect, setclientSelect] = React.useState("");

  return (
    <>
      {contextHolder}
      <div style={{ marginBottom: "10px" }}>
        <Input
          onChange={(e) => handleChange(e)}
          placeholder="Recherchez un code client"
        />
      </div>
      <div className="listeReponses">
        {filterFn.fn(donner).map((index) => {
          return (
            <React.Fragment key={index._id}>
              <Paper
                className="paper"
                sx={{
                  background: "rgb(0, 169, 224)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={() => setValidate(index.reponse[0]._id)}
              >
                <div>
                  <p style={{ fontSize: "12px" }}>
                    {index.reponse[0].codeclient +
                      "; " +
                      index.reponse[0].PayementStatut}
                  </p>
                </div>
                <div>
                  <p
                    style={{ float: "right", fontSize: "10px", color: "white" }}
                  >
                    {moment(index.reponse[0].createdAt).fromNow()}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      marginTop: "5px",
                      textAlign: "center",
                    }}
                  >
                    {index.reponse[0].followup ? "Followup" : "visit"}
                  </p>
                </div>
              </Paper>
              <>
                {validates === index.reponse[0]._id && (
                  <Paper className="paper">
                    <div className="listeImage">
                      <ImageComponent src={`${lien_image}/${index.file}`} />

                      <Typography component="div" sx={{ fontSize: "13px" }}>
                        ID : {index.idDemande}
                        <span
                          onClick={() => success(index.idDemande)}
                          style={{
                            marginLeft: "10px",
                            color: "blue",
                            fontWeight: "bolder",
                            cursor: "pointer",
                            textAlign: "center",
                          }}
                        >
                          copy ID
                        </span>
                        {index.codeclient !== undefined && index.codeclient};
                        {index?.sat} {index?.reference}
                        {index?.statut}; {index?.raison.toLowerCase()},{" "}
                        {index.numero && index.numero};
                      </Typography>
                    </div>

                    <div className="contentDemande">
                      <div className="reponseListe">
                        <p>
                          {index.reponse[0]?.codeclient};{" "}
                          {" " + index.reponse[0]?.nomClient.toUpperCase()}
                        </p>
                        <p>
                          statut client :{" "}
                          <span style={{ fontWeight: "bolder" }}>
                            {index.reponse[0]?.clientStatut}
                          </span>
                        </p>
                        <p>
                          statut payement
                          <span style={{ fontWeight: "bolder" }}>
                            {" : " + index.reponse[0]?.PayementStatut}
                          </span>{" "}
                        </p>
                        <p>
                          cons.Exp.Days :{" "}
                          <span style={{ fontWeight: "bolder" }}>
                            {index.reponse[0]?.consExpDays} jour(s)
                          </span>
                        </p>
                        <p>{index.reponse[0]?.codeCu}</p>
                        <p>{index.reponse[0]?.action}</p>
                      </div>
                      {!index.reponse[0]?.action &&
                        ["expired", "defaulted"].includes(
                          index.reponse[0].PayementStatut
                        ) && (
                          <button
                            className="actionbtn"
                            onClick={(e) => {
                              e.preventDefault();
                              setclientSelect(index.reponse[0]._id);
                              setOpenAction(true);
                            }}
                          >
                            Action ?
                          </button>
                        )}
                    </div>
                  </Paper>
                )}
              </>
            </React.Fragment>
          );
        })}
      </div>

      {_id && (
        <Popup open={open} setOpen={setOpen} title="Message">
          <FormReclamation id={_id} close={setOpen} />
        </Popup>
      )}
      <Popup open={openAction} setOpen={setOpenAction} title="Action">
        <Action id={clientSelect} setOpen={setOpenAction} />
      </Popup>
    </>
  );
}

export default Liste;
