import { Logout } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FirstLogin from "./FirstLogin";

function Header() {
  const userConnect = useSelector((state) => state.user?.user);
  const navigation = useNavigate();
  const deconnection = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    localStorage.removeItem("nom");
    localStorage.removeItem("codeAgent");
    localStorage.removeItem("codeZone");
    navigation("/", { replace: true });
  };
  return (
    <div>
      {userConnect && userConnect.first && <FirstLogin />}
      <div
        style={{
          color: "#fff",
          backgroundColor: "rgb(0, 169, 224)",
          padding: "4px",
        }}
      >
        <Box>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Typography
              component="p"
              noWrap
              sx={{
                width: "60%",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "bolder",
              }}
            >
              {localStorage.getItem("nom")}
            </Typography>
            <Typography
              component="p"
              sx={{ width: "20%", fontSize: "14px", fontWeight: "bolder" }}
            >
              {localStorage.getItem("codeAgent")}
            </Typography>
            <Typography
              component="p"
              onClick={(e) => deconnection(e)}
              noWrap
              sx={{ width: "20%", textAlign: "right", cursor: "pointer" }}
            >
              {" "}
              <Logout />
            </Typography>
          </div>
        </Box>
        {userConnect && (
          <Box sx={{ margin: "0px", padding: "0px" }}>
            <Typography sx={{ textAlign: "center", fontSize: "13px" }}>
              Region : {userConnect?.region?.denomination}{" "}
              {["PO", "ZBM"].includes(userConnect?.fonction)
                ? ""
                : `Shop : ${
                    userConnect?.shop.length === 1 && userConnect?.shop[0].shop
                  }`}
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
              contact : {userConnect?.telephone} / {userConnect?.fonction}
            </Typography>
          </Box>
        )}
      </div>
    </div>
  );
}

export default Header;
