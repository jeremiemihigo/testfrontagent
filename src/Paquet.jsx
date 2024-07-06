/* eslint-disable react/prop-types */
import { Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CreateContexte } from "./Context.jsx";
import Liste from "./Liste.jsx";
import { config, lien } from "./Static.jsx";
import "./style.css";

function Paquet() {
  const [data, setData] = React.useState();
  const [lotSelect, setLotSelect] = React.useState();
  const navigation = useNavigate();

  const { title, handleChangeTitle } = React.useContext(CreateContexte);
  const loading = async () => {
    try {
      const response = await axios.get(`${lien}/paquet`, config);
      if (response.status === 201) {
        localStorage.removeItem("auth");
        localStorage.removeItem("codeAgent");
        localStorage.removeItem("codeZone");
        localStorage.removeItem("nom");
        localStorage.removeItem("shop");
        navigation("/", { replace: true });
      } else {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    loading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const choisirLot = (paquet, critere, texte) => {
    handleChangeTitle(texte);
    setLotSelect({ donner: paquet, critere });
  };
  return (
    <div>
      <div className="titre">
        <img src="/bboxx.png" alt="bboxxPages" />
        <p> {title}</p>
      </div>

      {!lotSelect && (
        <Grid container>
          <Grid item lg={12} xs={12} sm={12} md={12} className="lotActive lot">
            <Typography component="p">
              {data ? data[0]._id : "Loading..."}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            className="conforme"
            onClick={() =>
              data && choisirLot(data[0].valide, "valide", "Validées")
            }
          >
            <Paper elevation={3} className="paper">
              <Typography component="p" className="title">
                Valides
              </Typography>
              {data ? (
                <Typography component="p" className="content">
                  {data[0].valide.length}
                </Typography>
              ) : (
                <Typography component="p" className="loading">
                  Loading...
                </Typography>
              )}
              {data && data[0].valide.length > 0 ? (
                <p style={{ fontSize: "9px" }}>Approved by support team</p>
              ) : (
                <p></p>
              )}
            </Paper>
          </Grid>
          <Grid
            item
            xs={6}
            className="attente"
            onClick={() =>
              data && choisirLot(data[0].attente, "attentes", "En attente")
            }
          >
            <Paper elevation={3} className="paper">
              <Typography component="p" className="title">
                En Attentes
              </Typography>
              {data ? (
                <Typography component="p" className="content">
                  {data[0].attente.length}
                </Typography>
              ) : (
                <Typography component="p" className="loading">
                  Loading...
                </Typography>
              )}
              {data && data[0].attente.length > 0 ? (
                <p style={{ fontSize: "9px", textAlign: "center" }}>
                  Being verified
                </p>
              ) : (
                <p style={{ fontSize: "9px", textAlign: "center" }}></p>
              )}
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            className="nConforme"
            onClick={() =>
              data &&
              choisirLot(data[0].nConforme, "nConformes", "Non conformes")
            }
          >
            <Paper elevation={3} className="paper">
              <Typography component="p" className="title">
                Non conformes
              </Typography>
              {data ? (
                <Typography component="p" className="content">
                  {data[0].nConforme.length}
                </Typography>
              ) : (
                <Typography component="p" className="loading">
                  Loading...
                </Typography>
              )}
              {data && (
                <p style={{ fontSize: "9px", textAlign: "center" }}>
                  It is possible to make changes
                </p>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} className="nConforme">
            {data && data[0].attente.length > 0 && (
              <Paper
                elevation={3}
                sx={{
                  padding: "10px",
                  textAlign: "justify",
                  lineHeight: 2,
                  fontSize: "12px",
                }}
              >
                Hello {localStorage.getItem("nom")}! Nous avions un problème
                d'enregistrement des images. Si vous avez des visites pour
                lesquelles on vous a demandé de renvoyer la photo (et celles qui
                sont en attente sans capture), vous pouvez renvoyer la photo en
                cliquant sur le bouton modifier.
                <hr />
                Merci pour votre compréhension
              </Paper>
            )}
          </Grid>
        </Grid>
      )}

      {lotSelect && <Liste lot={lotSelect} />}
    </div>
  );
}

export default Paquet;
