import { Search } from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ConstructionIcon from "@mui/icons-material/Construction";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import InventoryIcon from "@mui/icons-material/Inventory";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function BasicTabs() {
  const userConnect = useSelector((state) => state.user?.user);

  const navigation = useNavigate();
  const title = [
    {
      id: 1,
      title: "Paquet",
      link: "/paquet",
      icon: <InventoryIcon fontSize="small" />,
    },
    {
      id: 2,
      title: "Request",
      link: "/demande",
      icon: <VisibilityIcon fontSize="small" />,
    },
    {
      id: 3,
      title: "Documentation",
      link: "/documentation",
      icon: <FileCopyIcon fontSize="small" />,
    },
    {
      id: 4,
      title: "Profil",
      link: "/profil",
      icon: <AccountBoxIcon fontSize="small" />,
    },
    {
      id: 5,
      title: "Customer detail",
      link: "/recherche",
      icon: <Search fontSize="small" />,
    },
  ];
  const changePage = (link) => {
    navigation(link);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Box
        sx={{
          padding: 2,
          borderColor: "divider",
          color: "#fff",
        }}
      >
        <Grid container>
          {title.map((index) => {
            return (
              <Grid
                onClick={(e) => changePage(index.link)}
                key={index.id}
                item
                lg={6}
                sm={6}
                xs={6}
              >
                <Paper sx={style.paper} elevation={3}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "10px",
                      }}
                    >
                      {index.icon}
                    </div>
                    <Typography>{index.title}</Typography>
                  </div>
                </Paper>
              </Grid>
            );
          })}
          {userConnect?.fonction === "tech" && (
            <Grid
              onClick={(e) => changePage("/action")}
              item
              lg={6}
              sm={6}
              xs={6}
            >
              <Paper sx={style.paper} elevation={3}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <ConstructionIcon fontSize="small" />
                  </div>
                  <Typography>Synchro Actions</Typography>
                </div>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
const style = {
  paper: {
    padding: "5px",
    minHeight: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "3px",
  },
};
