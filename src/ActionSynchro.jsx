import { Paper } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { config, lien_issue } from "./Static";
import "./synchro.css";

function ActionSynchro() {
  const [data, setData] = React.useState();
  const loading = async () => {
    const response = await axios.get(lien_issue + "/actionsynchro", config);
    setData(response.data);
  };
  React.useEffect(() => {
    loading();
  }, []);
  const navigation = useNavigate();
  const clic = (data) => {
    navigation("/info", { state: data });
  };
  return (
    <>
      <Header />
      <div style={{ padding: "15px" }}>
        <div className="titre">
          <img src="/bboxx.png" alt="bboxxPages" />
          <p>Synchro Actions</p>
        </div>
        <div style={{ marginBottom: "15px" }}>
          {data &&
            data.length > 0 &&
            data.map((index) => {
              return (
                <Paper
                  elevation={3}
                  key={index._id}
                  className="synchro"
                  onClick={() => clic(index)}
                >
                  <div className="synchro_id">
                    <p>{index.codeclient}</p>
                    <p>{index.idPlainte}</p>
                  </div>

                  <div className="synchro_plainte">
                    <p>{index.plainteSelect}</p>
                    <p className="synchro_statut">{index.statut}</p>
                  </div>
                </Paper>
              );
            })}
          {data && data.length === 0 && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>No tickets</p>
          )}
          {!data && (
            <p
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "12px",
              }}
            >
              Loading...
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ActionSynchro;
