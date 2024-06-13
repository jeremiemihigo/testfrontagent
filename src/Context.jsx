/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { lien_socket } from "./Static.jsx";

export const CreateContexte = createContext();
const ContexteAll = (props) => {
  const [title, setTitle] = React.useState("Paquet");

  const handleChangeTitle = (texte) => {
    setTitle(texte);
  };

  const [socket, setSocket] = React.useState(null);
  const user = useSelector((state) => state?.user.user);

  React.useEffect(() => {
    setSocket(io(lien_socket));
  }, []);
  React.useEffect(() => {
    if (socket !== null && user) {
      const data = {
        codeAgent: user.codeAgent,
        nom: user.nom,
      };
      socket.emit("newUser", data);
    }
  }, [socket, user]);

  return (
    <CreateContexte.Provider
      value={{
        title,
        handleChangeTitle,
        socket,
      }}
    >
      {props.children}
    </CreateContexte.Provider>
  );
};
export default ContexteAll;
