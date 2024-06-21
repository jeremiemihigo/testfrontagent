import {
  Logout,
  Message,
  Person,
  TocOutlined,
  Visibility,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Chats from "./Chat";
import { CreateContexte } from "./Context";
import Demande from "./Demande";
import FirstLogin from "./FirstLogin";
import Paquet from "./Paquet";
import Profil from "./Profil";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            paddingTop: 1,
            paddingLeft: 4,
            paddingRight: 4,
            paddingBottom: 4,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const userConnect = useSelector((state) => state.user?.user);
  const { handleChangeTitle } = React.useContext(CreateContexte);

  const navigation = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const deconnection = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    localStorage.removeItem("nom");
    localStorage.removeItem("codeAgent");
    localStorage.removeItem("codeZone");
    navigation("/", { replace: true });
  };
  console.log(userConnect);
  return (
    <Box sx={{ width: "100%" }}>
      {userConnect && userConnect.first && <FirstLogin />}
      <div
        style={{
          color: "#fff",
          backgroundColor: "rgb(15, 15, 94)",
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
              Région : {userConnect?.region?.denomination}{" "}
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
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          color: "#fff",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={<TocOutlined fontSize="small" />}
            {...a11yProps(0)}
            onClick={() => handleChangeTitle("Paquet")}
          />
          <Tab
            label={<Visibility fontSize="small" />}
            {...a11yProps(1)}
            onClick={() => handleChangeTitle("Demande")}
          />
          <Tab
            label={<Message fontSize="small" />}
            {...a11yProps(2)}
            onClick={() => handleChangeTitle("Feedback")}
          />
          <Tab
            label={<Person fontSize="small" />}
            {...a11yProps(3)}
            onClick={() => handleChangeTitle("Profil")}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Paquet />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Demande />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Chats />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Profil />
      </CustomTabPanel>
    </Box>
  );
}
