/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext } from 'react';
export const CreateContexte = createContext();

const ContexteAll = (props) => {
 

  const [title, setTitle] = React.useState("Paquet");

  const handleChangeTitle =(texte)=>{
    setTitle(texte)
  }

  return (
    <CreateContexte.Provider
      value={{
      title, handleChangeTitle
      }}
    >
      {props.children}
    </CreateContexte.Provider>
  );
};
export default ContexteAll;
