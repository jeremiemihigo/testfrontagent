/* eslint-disable react/prop-types */
import axios from 'axios'
import { dateFrancais, lien, lien_image, config } from './Static'
import React from 'react'
import './demandeListe.css'
import { Typography, CircularProgress, Box } from '@mui/material'
import Popup from './Control/Popup'
import FormReclamation from './FormReclamation'
import { Edit, Message } from '@mui/icons-material'
import UpdateDemande from './UpdateDemande'

function Liste({ lot }) {
  const [data, setData] = React.useState()
  const [open, setOpen] = React.useState(false)
  const [openDemande, setOpenDemande] = React.useState(false)
  const [demandeToUpdate, setDemandeToUpdate] = React.useState()
  const [load, setLoad] = React.useState(false)
  const [_id, setId] = React.useState()
  const loadingListe = async () => {
    setLoad(true)
    try {
      const response = await axios.get(
        `${lien}/demandeAll/${lot}/${localStorage.getItem('codeAgent')}`,
        config,
      )
      setData(response.data)
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    loadingListe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lot])

  const openPopup = (index, e) => {
    e.preventDefault()
    setId(index)
    setOpen(true)
  }

  const updateDemande =(index)=>{
    setDemandeToUpdate(index)
    setOpenDemande(true)
  }

  return (
    <div>
      {load && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={18} />
        </Box>
      )}
      {data &&
        data.map((index) => {
          return (
            <div key={index._id}>
              <div className="listeImage">
                <img src={`${lien_image}/${index.file}`} alt={index._id} />
                <Typography component="p" sx={{ fontSize: '13px' }}>
                  {index?.codeclient};{index?.commune}; {index?.sector}{' '}
                  {index?.sat} {index?.reference}
                  {index?.statut}; {index?.raison},{' '}
                  {index.numero && index.numero};
                  <span>{dateFrancais(index?.createdAt)}</span>
                </Typography>
              </div>
              <div className="itemButtons">
                {index.reponse.length <= 0 ? (
                  <div  onClick={()=>updateDemande(index)} >
                    
                    <Edit fontSize="small" /> <span>Modifier</span>
                  </div>
                ) : <div><span style={{color:'green', fontWeight:"bolder"}}>Done</span></div>}
                <div onClick={(e) => openPopup(index._id, e)}>
                  <Message fontSize="small" /> <span>Feedback</span>
                </div>
              </div>
              <div>
                {index.reponse.length > 0 &&
                  index.reponse.map((item) => {
                    return (
                      <div
                        key={item._id}
                        className="reponseListe"
                        onClick={(e) => openPopup(item._id, e)}
                      >
                        <p>{item.codeclient}</p>
                        <p>{item.nomClient}</p>
                        <p>Statut du client ;{item.clientStatut}</p>
                        <p>Statut payement ;{item.PayementStatut}</p>

                        <p>consExpDays</p>
                        <p>
                          {item.consExpDays}{' '}
                          {`${item.consExpDays === 1 ? 'Jour' : 'Jours'}`}
                        </p>
                        <p>
                          {item.region}/{item.shop}
                        </p>
                        <p>{item?.codeCu}</p>
                      </div>
                    )
                  })}
              </div>
            </div>
          )
        })}
      {data && data.length === 0 && (
        <p
          style={{
            fontSize: '12px',
            marginTop: '20px',
            textAlign: 'center',
            color: 'red',
          }}
        >
          Aucune demande trouvée
        </p>
      )}
      {_id && (
        <Popup open={open} setOpen={setOpen} title="Message">
          <FormReclamation id={_id} />
        </Popup>
      )}
      {demandeToUpdate && (
        <Popup open={openDemande} setOpen={setOpenDemande} title="Message">
          <UpdateDemande demande={demandeToUpdate} />
        </Popup>
      )}
    </div>
  )
}

export default Liste
