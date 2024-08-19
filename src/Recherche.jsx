import { Search } from "@mui/icons-material";
import { Button, FormControl, Grid, OutlinedInput } from "@mui/material";
import { message } from "antd";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import LoaderGif from "./Control/Loading";
import Header from "./Header";
import "./recherche.css";
import { config, lien } from "./Static";

function Recherche() {
  const [value, setValue] = React.useState("");
  const user = useSelector((state) => state?.user.user);
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const successAlert = (texte, type) => {
    messageApi.open({
      type,
      content: "" + texte,
      duration: 5,
    });
  };

  const sendDonner = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const reponse = await axios.get(`${lien}/oneReponse/${value}`, config);
      if (reponse.data === "token expired") {
        localStorage.removeItem("auth");
        window.location.replace("/");
      } else {
        if (reponse.data.visites.length === 0) {
          successAlert("No result found", "error");
          setLoading(false);
        } else {
          setData(_.groupBy(reponse.data.visites, "demande.lot"));
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div style={{ margin: "10px" }}>
        {contextHolder}
        <Grid container>
          <Grid item xs={8}>
            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                size="small"
                id="header-search"
                aria-describedby="header-search-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Account_id"
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              paddingLeft: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={(e) => sendDonner(e)}
              variant="contained"
              color="primary"
              disabled={loading}
            >
              <Search fontSize="small" />
              Search
            </Button>
          </Grid>
        </Grid>
        <p
          style={{
            padding: "0px",
            margin: "10px 0px",
            textAlign: "center",
            fontSize: "11px",
          }}
        >
          Hello
          <strong>
            {" " +
              localStorage.getItem("nom").split(" ")[
                localStorage.getItem("nom").split(" ").length - 1
              ] +
              " "}
          </strong>
          Ici tu peux rechercher toutes les visites déjà effectuées chez un
          client.
        </p>
        {loading && <LoaderGif width={300} height={300} />}
        <Grid sx={{ marginTop: "10px" }}>
          {data &&
            Object.keys(data).map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <div className="lot">{item}</div>
                  <Grid container>
                    {data["" + item].map((index, cle) => {
                      return (
                        <React.Fragment key={cle + 1}>
                          <Grid item lg={12}>
                            <div
                              className="reponseClasse"
                              variant="outlined"
                              sx={{ padding: "5px", minWidth: "100%" }}
                            >
                              <p>
                                <span style={{ fontWeight: "bolder" }}>
                                  customer_name :
                                </span>
                                {" " + index?.nomClient}
                              </p>

                              <p>
                                <span style={{ fontWeight: "bolder" }}>
                                  Feedback :{" "}
                                </span>{" "}
                                {index.demande?.raison.toLowerCase()};
                              </p>
                              <p>
                                <span style={{ fontWeight: "bolder" }}>
                                  Adresse{" "}
                                </span>
                                : {index.demande?.sector}, {index.demande?.cell}
                                , {index.demande?.sat},{" "}
                                {index.demande.reference}{" "}
                              </p>
                              <p>
                                {index.demandeur.fonction}{" "}
                                {index.demandeur.codeAgent};{" "}
                                {index.demandeur.nom};{" "}
                              </p>
                              {index.demande?.numero !== "undefined" && (
                                <p>
                                  <span style={{ fontWeight: "bolder" }}>
                                    Numero joignable du client
                                  </span>{" "}
                                  : {index.demande?.numero}
                                </p>
                              )}
                              <p style={{ fontWeight: "bolder" }}>
                                C.U : {index?.codeCu}
                              </p>
                              <p className="retard">
                                <span style={{ fontWeight: "bolder" }}>
                                  Date
                                </span>{" "}
                                {moment(index.demande.createdAt).format(
                                  "DD/MM/YYYY hh:mm"
                                )}
                              </p>
                            </div>
                            <div
                              className="reponseClasse"
                              style={{ display: "flex" }}
                            >
                              <p>
                                customer :{" "}
                                <span style={{ fontWeight: "bolder" }}>
                                  {index.clientStatut}
                                </span>
                              </p>
                              <p>
                                payment :{" "}
                                <span style={{ fontWeight: "bolder" }}>
                                  {index.PayementStatut}
                                </span>
                              </p>
                              <p>Days : {index.consExpDays} jour(s)</p>
                            </div>
                          </Grid>
                          <div className="marge"></div>
                        </React.Fragment>
                      );
                    })}
                  </Grid>
                </React.Fragment>
              );
            })}
        </Grid>
      </div>
    </>
  );
}

export default Recherche;
