import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActionSynchro from "./ActionSynchro.jsx";
import "./App.css";
import Demande from "./Demande.jsx";
import DetailPlainte from "./DetailAction.jsx";
import Documentation from "./Documentation.jsx";
import Login from "./Login.jsx";
import Operations from "./Operations.jsx";
import Paquet from "./Paquet.jsx";
import Profil from "./Profil.jsx";
import Recherche from "./Recherche.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="*" element={<Login />} />
        <Route path="/operation" element={<Operations />} />
        <Route path="/demande" element={<Demande />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/paquet" element={<Paquet />} />
        <Route path="/action" element={<ActionSynchro />} />
        <Route path="/info" element={<DetailPlainte />} />
        <Route path="/recherche" element={<Recherche />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
