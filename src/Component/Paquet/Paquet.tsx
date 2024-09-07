/* eslint-disable react/prop-types */
import { Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IDemande } from "../../Interface/IPaquet.js";
import LoaderGif from "../../Static/LoaderGif.js";
import Logo from "../../Static/Logo.js";
import { config, lien } from "../../Static/static.js";
import Liste from "../../Structure/Listes";
import "./Paquet.style.css";

interface TDonner {
  allData: IDemande[];
  attente: IDemande[];
  nConforme: IDemande[];
  valide: IDemande[];
  _id: string;
}

interface Lot {
  donner: IDemande[];
  critere: string;
}

function Paquet() {
  const [data, setData] = React.useState<TDonner>();
  const [lotSelect, setLotSelect] = React.useState<Lot>();
  const navigation = useNavigate();
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
        const data: TDonner = response.data[0];
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    loading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const choisirLot = (paquet: IDemande[], critere: string) => {
    setLotSelect({ donner: paquet, critere });
  };
  return (
    <>
      <div style={{ padding: "15px" }}>
        <Logo text="Paquet" />
        {!data ? (
          <LoaderGif width={400} height={400} />
        ) : (
          <>
            {!lotSelect && (
              <Grid container>
                <Grid
                  item
                  lg={12}
                  xs={12}
                  sm={12}
                  md={12}
                  className="lotActive lot"
                >
                  <Typography component="p">
                    {data ? data._id : "Loading..."}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  className="conforme"
                  onClick={() => data && choisirLot(data.valide, "valide")}
                >
                  <Paper elevation={3} className="paper">
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Grid sx={{ marginRight: "10px" }}>
                        <Typography component="p" className="title">
                          Visites
                        </Typography>
                        <Typography component="p" className="value">
                          {
                            data.valide.filter(
                              (x: any) => !x.reponse[0].followup
                            ).length
                          }
                        </Typography>
                      </Grid>
                      <Grid sx={{ marginLeft: "10px" }}>
                        <Typography component="p" className="title">
                          Follow_up
                        </Typography>
                        <Typography component="p" className="value">
                          {
                            data.valide.filter(
                              (x: any) => x.reponse[0].followup
                            ).length
                          }
                        </Typography>
                      </Grid>
                    </Grid>

                    {data && data.valide.length > 0 ? (
                      <p style={{ fontSize: "9px", textAlign: "center" }}>
                        Approved by support team
                      </p>
                    ) : (
                      <p></p>
                    )}
                  </Paper>
                </Grid>
                <Grid
                  item
                  xs={6}
                  className="attente"
                  onClick={() => data && choisirLot(data.attente, "attentes")}
                >
                  <Paper elevation={3} className="paper">
                    <Typography component="p" className="title">
                      En Attentes
                    </Typography>
                    {data ? (
                      <Typography component="p" className="content">
                        {data.attente.length}
                      </Typography>
                    ) : (
                      <Typography component="p" className="loading">
                        Loading...
                      </Typography>
                    )}
                    {data && data.attente.length > 0 ? (
                      <p style={{ fontSize: "9px", textAlign: "center" }}>
                        Being verified
                      </p>
                    ) : (
                      <p style={{ fontSize: "9px", textAlign: "center" }}>
                        Everything is done
                      </p>
                    )}
                  </Paper>
                </Grid>
                <Grid
                  item
                  xs={12}
                  className="nConforme"
                  onClick={() =>
                    data && choisirLot(data.nConforme, "nConformes")
                  }
                >
                  <Paper elevation={3} className="paper">
                    <Typography component="p" className="title">
                      Non conformes
                    </Typography>
                    {data ? (
                      <Typography component="p" className="content">
                        {data.nConforme.length}
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
              </Grid>
            )}
          </>
        )}

        {lotSelect && (
          <Liste donner={lotSelect.donner} critere={lotSelect.critere} />
        )}
      </div>
    </>
  );
}

export default Paquet;
