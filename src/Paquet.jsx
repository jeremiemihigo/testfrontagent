/* eslint-disable react/prop-types */
import axios from 'axios'
import { lien, config } from './Static.jsx'
import React from 'react'
import { CircularProgress, Box } from '@mui/material'
import Liste from './Liste.jsx'
import './style.css'
import { CreateContexte } from './Context.jsx'

function Paquet() {
  const [data, setData] = React.useState()
  const [load, setLoad] = React.useState(false)
  const [lotSelect, setLotSelect] = React.useState()

  const { title, handleChangeTitle } = React.useContext(CreateContexte)
  const loading = async () => {
    setLoad(true)
    try {
      const response = await axios.get(
        `${lien}/paquet`,
        config,
      )
      if(response.status === 201){
        window.location.replace("/")
      }else{
        setData(response.data)
        setLoad(false)
      }
     
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    loading()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const choisirLot = (paquet, critere, texte) => {
    handleChangeTitle(texte)
    setLotSelect({ donner: paquet, critere })
  }
  return (
    <div>
      <div className="titre">
        <img src="/bboxx.png" alt="bboxxPages" />
        <p> {title}</p>
      </div>
      {load && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={18} />
        </Box>
      )}
      <div className="liste">
        {data &&
          !lotSelect &&
          data.map((index) => {
            return (
              index._id !== null && (
                <div key={index._id} className={index.active ? "lot lotActive":"lot"}>
                  <div className="titleLot">{index._id}</div>
                  <div className="contentLot">
                    <div onClick={() => choisirLot(index.valide, 'valide', 'Validées')}>
                      <p className="contentTitle">Valides</p>
                      <p className="contentData">{index.valide.length}</p>
                    </div>
                    <div onClick={() => choisirLot(index.attente, 'attentes', "En attente")}>
                      <p className="contentTitle">En attentes</p>
                      <p className="contentData">{index.attente.length}</p>
                    </div>
                    <div
                      onClick={() => choisirLot(index.nConforme, 'nConformes', "Non conformes")}
                    >
                      <p className="contentTitle">Non conformes</p>
                      <p className="contentData">{index.nConforme.length}</p>
                    </div>
                  </div>
                </div>
              )
            )
          })}
      </div>

      {lotSelect && <Liste lot={lotSelect} />}
    </div>
  )
}

export default Paquet
