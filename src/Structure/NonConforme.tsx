/* eslint-disable react/prop-types */
import { Edit } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { message } from "antd";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IDemande } from "../Interface/IPaquet";
import ImageComponent from "../Static/ImageComponent";
import { lien_image } from "../Static/static";
// import UpdateDemande from "../UpdateDemande";

type Props = {
  donner: IDemande[];
};

function NonConforme(props: Props) {
  const { donner } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const success = (texte: string) => {
    navigator.clipboard.writeText(texte);
    messageApi.open({
      type: "success",
      content: "Done " + texte,
      duration: 2,
    });
  };

  const navigation = useNavigate();

  const updateDemande = (index: IDemande) => {
    navigation("/update", { state: index });
  };

  return (
    <>
      {contextHolder}
      <div>
        {donner &&
          donner.map((index) => {
            return (
              <React.Fragment key={index._id}>
                <div className="listeImage">
                  <ImageComponent src={`${lien_image}/${index.file}`} />

                  <Typography component="p" sx={{ fontSize: "13px" }}>
                    code : {index.idDemande}
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
                      copy code
                    </span>
                    <span style={{ float: "right", fontSize: "10px" }}>
                      {moment(index.createdAt).fromNow()}
                    </span>
                    {index.codeclient !== undefined && index.codeclient};
                    {index?.sat} {index?.reference}
                    {index?.statut}; {index?.raison.toLowerCase()},{" "}
                    {index.numero && index.numero};
                  </Typography>
                </div>
                <div className="itemButtons">
                  {index.reponse.length <= 0 ? (
                    <div onClick={() => updateDemande(index)}>
                      <Edit fontSize="small" /> <span>Modifier</span>
                    </div>
                  ) : (
                    <div>
                      <span style={{ color: "green", fontWeight: "bolder" }}>
                        Done
                      </span>
                    </div>
                  )}
                </div>
                {index.double && (
                  <div style={{ margin: "0px", background: "#4684D3" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      Cette visite est déjà dans tes visites validées
                    </p>
                  </div>
                )}
                <div>
                  {index.conversation.length > 0 &&
                    index.conversation.map((item) => {
                      return (
                        <div
                          key={item._id}
                          className={
                            item.sender === "agent" ? "agent" : "callcenter"
                          }
                        >
                          <p className="messageText">{item.message}</p>
                          <p className="heure">
                            {moment(item.createdAt).fromNow()}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
}

export default NonConforme;
