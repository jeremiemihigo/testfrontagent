import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import "./detail.css";
import Header from "./Header";
import { formatTime } from "./Static";

function DetailPlainte() {
  const location = useLocation();
  const plainteSelect = location.state;

  const returnTime = (date1, date2) => {
    let resultat =
      (new Date(date2).getTime() - new Date(date1).getTime()) / 60000;
    if (resultat < 1) {
      return 1;
    } else {
      return resultat;
    }
  };

  const CountdownTimer = (a) => {
    const initialMinutes = isNaN(a) ? 0 : a;
    const [time, setTime] = React.useState(initialMinutes * 60);
    React.useEffect(() => {
      if (time > 0) {
        const intervalId = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
      }
    }, [time]);
    return <>{formatTime(time)}</>;
  };
  return (
    <>
      <Header />
      {plainteSelect ? (
        <div style={{ padding: "10px" }}>
          <Grid container>
            <Grid item lg={8} xs={12} sm={4} md={4}>
              <Paper>
                <Grid
                  sx={{
                    padding: "5px",
                    backgroundColor: "#002d72",
                    color: "#fff",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: "bolder" }}
                    noWrap
                  >
                    {plainteSelect.nomClient}{" "}
                  </Typography>
                </Grid>
                <Grid sx={{ padding: "5px" }}>
                  <Grid container>
                    <Grid item xs={12} sm={6} className="grid">
                      <Typography component="p" className="title">
                        Num_ticket
                      </Typography>
                      <Typography className="values">
                        {plainteSelect.idPlainte}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} className="grid">
                      <Typography className="title">Type Plainte</Typography>
                      <Typography className="values">
                        {plainteSelect.plainteSelect}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={6} className="grid">
                      <Typography className="title">ID</Typography>
                      <Typography className="values">
                        {plainteSelect.codeclient}
                      </Typography>
                    </Grid>

                    <Grid item lg={6} xs={12} sm={6} className="grid">
                      <Typography className="title">Shop</Typography>
                      <Typography className="values">
                        {plainteSelect?.shop}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={6} className="grid">
                      <Typography className="title">assignBy</Typography>
                      <Typography className="values">
                        {plainteSelect?.technicien?.assignBy}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={6} className="grid">
                      <Typography className="title">Num_synchro</Typography>
                      <Typography className="values">
                        {plainteSelect?.technicien?.numSynchro}
                      </Typography>
                    </Grid>

                    <Grid item lg={6} xs={12} sm={6} className="grid">
                      <Typography className="title">Statut</Typography>
                      <Typography className="values">
                        {plainteSelect?.statut}
                      </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} sm={6} className="grid">
                      {CountdownTimer(
                        (
                          plainteSelect.time_delai -
                          returnTime(plainteSelect.fullDateSave, new Date())
                        ).toFixed(0)
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item lg={4}>
              {plainteSelect?.adresse && (
                <Paper sx={{ padding: "10px", marginTop: "10px" }}>
                  <p>Adresses</p>
                  <p style={{ padding: "0px", margin: "0px 0px" }}>
                    Commune : {plainteSelect?.adresse?.commune}
                  </p>
                  <p style={{ padding: "0px", margin: "10px 0px" }}>
                    Quartier : {plainteSelect?.adresse?.quartier}
                  </p>
                  <p style={{ padding: "0px", margin: "0px" }}>
                    Avenue : {plainteSelect?.adresse?.avenue}
                  </p>
                  <p style={{ padding: "0px", margin: "10px 0px" }}>
                    SAT : {plainteSelect?.adresse?.sat.nom_SAT}/{" "}
                    {plainteSelect?.adresse?.sat?.region}/{" "}
                    {plainteSelect?.adresse?.sat?.shop}
                  </p>
                  <p style={{ padding: "0px", margin: "0px" }}>
                    Reference : {plainteSelect?.adresse?.reference}
                  </p>
                </Paper>
              )}
            </Grid>
          </Grid>
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>No information</p>
      )}
    </>
  );
}

export default DetailPlainte;
