/* eslint-disable react/prop-types */
import { Language, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
} from "@mui/material";
import { Input, message } from "antd";
import axios from "axios";
import React from "react";
import AutoComplement from "./Control/AutoComplete";
import TextArea from "./Control/TextArea";
import Header from "./Header";
import { config, lien, raison, sat } from "./Static";
// import UploadImage from './Image'

function Demande() {
  const [initial, setInitial] = React.useState();
  const [value, setValue] = React.useState("");
  const [generateLoc, setGenerateLoc] = React.useState(false);
  const [file, setImage] = React.useState();
  const [satSelect, setSatSelect] = React.useState("");

  const [raisonSelect, setRaisonSelect] = React.useState("");
  const [raisonRwrite, setRaisonRwrite] = React.useState("");
  const [autre, setAutre] = React.useState(false);

  const [loadings, setLoadings] = React.useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInitial({ ...initial, [name]: value });
  };

  const [location, setLocation] = React.useState(null);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const altitude = position.coords.altitude;
    setLocation({ latitude, longitude, altitude });
    setGenerateLoc(false);
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  function handleLocationClick() {
    setGenerateLoc(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setGenerateLoc(false);
    }
  }
  const [messageApi, contextHolder] = message.useMessage();
  const successAlert = (texte, type) => {
    messageApi.open({
      type,
      content: "" + texte,
      duration: 5,
    });
  };
  const sendData = async (e) => {
    try {
      setLoadings(true);
      e.preventDefault();
      if (
        !initial?.reference ||
        satSelect === "" ||
        !satSelect ||
        !initial?.cell ||
        (raisonSelect === "" && raisonRwrite === "") ||
        !file ||
        value === ""
      ) {
        successAlert(
          "Veuillez renseigner les champs ayant l'asterisque ainsi que la photo",
          "error"
        );
      } else {
        let raison = autre ? raisonRwrite : raisonSelect?.raison;

        const data = new FormData();
        data.append("file", file);
        data.append("longitude", location?.longitude);
        data.append("latitude", location?.latitude);
        data.append("altitude", location?.altitude);
        data.append("codeAgent", localStorage.getItem("codeAgent"));
        data.append("codeZone", localStorage.getItem("codeZone"));
        data.append("codeclient", initial?.codeclient);
        data.append("statut", value);
        data.append("raison", raison);
        data.append("sector", initial?.sector);
        data.append("cell", initial?.cell);
        data.append("reference", initial?.reference);
        data.append("sat", satSelect?.nom_SAT);
        data.append("numero", initial?.numero);
        data.append("commune", initial?.commune);
        data.append("jours", initial?.jours);

        const response = await axios.post(lien + "/demande", data, config);

        // socket.emit("sendData", data);

        if (response.status === 200) {
          setLocation(null);
          const form = document.getElementById("formDemande");
          const fileInput = form.querySelector('input[type="file"]');
          fileInput.value = "";
          setInitial();
          setImage();
          setAutre(false);
          setRaisonSelect("");
          setSatSelect("");
          setValue("");
          successAlert("Enregistrement effectuer ", "success");
        } else {
          successAlert(
            "" +
              response.data +
              " (si l'erreur persiste veuillez-vous connecter de nouveau)",
            "error"
          );
        }
      }
      setLoadings(false);
    } catch (error) {
      setLoadings(false);
      if (error.code === "ERR_NETWORK") {
        successAlert(
          "Rassurez-vous que votre appareil a une connexion active",
          "error"
        );
      }
    }
  };
  const returnValue = (champs) => {
    if (initial && initial["" + champs]) {
      return initial["" + champs];
    } else {
      return "";
    }
  };

  const changeRaison = () => {
    setRaisonRwrite("");
    setRaisonSelect("");
    setAutre(!autre);
  };

  return (
    <>
      <Header />
      <div style={{ padding: "15px" }}>
        <div className="titre">
          <img src="/bboxx.png" alt="bboxxPages" />
          <p> Demande</p>
        </div>
        <form id="formDemande">
          {contextHolder}

          <div style={{ marginBottom: "10px" }}>
            <Input
              placeholder="Code client"
              name="codeclient"
              value={returnValue("codeclient")}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div style={{ marginBottom: "11px" }}>
            <Input
              required
              name="commune"
              value={returnValue("commune")}
              onChange={(e) => handleChange(e)}
              placeholder="Commune *"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Input
              required
              name="sector"
              value={returnValue("sector")}
              onChange={(e) => handleChange(e)}
              placeholder="Quartier *"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Input
              name="cell"
              value={returnValue("cell")}
              onChange={(e) => handleChange(e)}
              placeholder="Avenue *"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Input
              name="reference"
              value={returnValue("reference")}
              onChange={(e) => handleChange(e)}
              placeholder="Référence *"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <AutoComplement
              value={satSelect}
              setValue={setSatSelect}
              options={sat}
              title="Selectionnez le sat du client *"
              propr="nom_SAT"
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            {/* <UploadImage setFile={setFichier} /> */}

            <input
              onChange={(event) => {
                const file = event.target.files[0];
                setImage(file);
              }}
              type="file"
              accept=".png, .jpg, .jpeg"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Box sx={{ display: "flex" }}>
              <FormControl
                sx={{ m: 1 }}
                component="fieldset"
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    onClick={() => setValue("allumer")}
                    control={
                      <Checkbox checked={value === "allumer"} name="allumer" />
                    }
                    label="Allumé"
                  />
                </FormGroup>
              </FormControl>
              <FormControl
                component="fieldset"
                sx={{ m: 1 }}
                variant="standard"
              >
                <FormLabel component="legend"></FormLabel>
                <FormGroup>
                  <FormControlLabel
                    onClick={() => setValue("eteint")}
                    control={
                      <Checkbox checked={value === "eteint"} name="eteint" />
                    }
                    label="Eteint"
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </div>
          <div style={{ marginBottom: "10px" }}>
            {autre ? (
              <TextArea
                setValue={setRaisonRwrite}
                value={raisonRwrite}
                placeholder="Autres *"
              />
            ) : (
              <AutoComplement
                value={raisonSelect}
                setValue={setRaisonSelect}
                options={raison}
                title="Selectionnez le feedback *"
                propr="raison"
              />
            )}

            <p
              onClick={() => changeRaison()}
              style={{
                fontSize: "12px",
                textAlign: "right",
                cursor: "pointer",
                color: "blue",
                fontWeight: "bolder",
                margin: "5px",
              }}
            >
              {autre ? "Choisir la selection du feedback" : "Autre feedback"}
            </p>
          </div>
          {raisonSelect && raisonSelect?.id === 5 && (
            <div style={{ marginTop: "10px" }}>
              <Input
                value={returnValue("jours")}
                placeholder="Le client va payer dans combien de jours ?"
                name="jours"
                onChange={(e) => handleChange(e)}
              />
            </div>
          )}

          <div style={{ marginTop: "10px" }}>
            <Input
              value={returnValue("numero")}
              placeholder="Numero joignable du client"
              name="numero"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#dedede",
              borderRadius: "20px",
              padding: "10px",
              margin: "10px",
            }}
          >
            <p>
              long : {location?.longitude}
              {" lat : "}
              {location?.latitude}
            </p>
          </div>
          <Grid container>
            <Grid item xs={6}>
              <Button
                color="secondary"
                variant="contained"
                disabled={generateLoc}
                fullWidth
                onClick={handleLocationClick}
              >
                <Language fontSize="small" />
                <span style={{ marginLeft: "10px" }}>
                  {generateLoc && "Patientez..."}
                </span>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                sx={{ marginLeft: "10px" }}
                fullWidth
                className="primary"
                variant="contained"
                onClick={(e) => sendData(e)}
                disabled={loadings}
              >
                <Send fontSize="small" />
                <span style={{ marginLeft: "10px" }}>
                  {loadings && "Patientez..."}
                </span>
              </Button>
            </Grid>
          </Grid>

          <div style={{ marginTop: "10px" }}>
            <p>
              Rassurez-vous que vous etes chez le client pour une meilleure
              géolocalisation
            </p>
          </div>
          <div></div>
        </form>
      </div>
    </>
  );
}

export default Demande;
