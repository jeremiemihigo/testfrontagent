import { Button, CircularProgress, Paper, Typography } from "@mui/material";
import { Input } from "antd";
import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { lien } from "./Static";

function Login() {
  const [initial, setInitial] = React.useState({
    username: "",
    password: "",
  });
  const navigation = useNavigate();
  const [sending, setSending] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitial({
      ...initial,
      [name]: value,
    });
  };
  React.useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigation("/operation", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onsubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await axios.post(lien + "/login", initial);

      if (response.data.token) {
        localStorage.setItem("auth", response.data.token);
        localStorage.setItem("codeAgent", response.data.codeAgent);
        localStorage.setItem("codeZone", response.data.codeZone);
        localStorage.setItem("nom", response.data.nom);
        window.location.replace("/operation");
        setSending(false);
      } else {
        setMessage("Incorrect");
        setSending(false);
      }
    } catch (error) {
      console.log(error);
      setSending(false);
    }
  };

  return (
    <div className="screen">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5, duration: 5, stiffness: 80 }}
      >
        <Paper>
          <img src="/bboxx.png" alt="bboxx" className="imageLogin" />
          <div className="screen__content">
            <form className="login">
              {message && (
                <Typography style={{ color: "red" }}>{message}</Typography>
              )}
              <div className="login__field">
                <Input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="username"
                  placeholder="ID"
                />
              </div>
              <div className="login__field">
                <Input
                  onChange={(e) => handleChange(e)}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <Button
                variant="contained"
                fullWidth
                onClick={(e) => onsubmit(e)}
              >
                <span className="button__text" style={{ textAlign: "center" }}>
                  {sending && <CircularProgress size={15} color="inherit" />}{" "}
                  <span style={{ marginLeft: "15px" }}>
                    {sending ? "Please wait..." : "Connexion"}
                  </span>
                </span>
              </Button>
            </form>
          </div>
        </Paper>
      </motion.div>
    </div>
  );
}
export default Login;
