/* eslint-disable react/prop-types */
import { lien_image } from '../Static'
import React from 'react'
import '../demandeListe.css'
import { Typography } from '@mui/material'
import Popup from '../Control/Popup'
import FormReclamation from '../FormReclamation'
import { Edit, Message } from '@mui/icons-material'
import UpdateDemande from '../UpdateDemande'
import moment from 'moment'
import { message } from 'antd'

function Attente({ donner }) {
  const [messageApi, contextHolder] = message.useMessage()
  const success = (texte) => {
    navigator.clipboard.writeText(texte)
    messageApi.open({
      type: 'success',
      content: 'Done ' + texte,
      duration: 2,
    })
  }
  const [open, setOpen] = React.useState(false)
  const [openDemande, setOpenDemande] = React.useState(false)
  const [demandeToUpdate, setDemandeToUpdate] = React.useState()
  const [_id, setId] = React.useState()

  const openPopup = (index, e) => {
    e.preventDefault()
    setId(index)
    setOpen(true)
  }

  const updateDemande = (index) => {
    setDemandeToUpdate(index)
    setOpenDemande(true)
  }

  return (
    <div className="listeAll">
      <>{contextHolder}</>
      {donner.map((index) => {
        return (
          <div key={index._id} className="messagesToutes">
            <div className="listeImage">
              <img src={`${lien_image}/${index.file}`} alt={index._id} />
              <Typography component="p" sx={{ fontSize: '13px' }}>
                <p>
                  ID : {index.idDemande}
                  <span
                    onClick={() => success(index.idDemande)}
                    style={{
                      marginLeft: '10px',
                      color: 'blue',
                      fontWeight: 'bolder',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    copy ID
                  </span>
                  <span style={{ float: 'right', fontSize: '10px' }}>
                    {moment(index.createdAt).fromNow()}
                  </span>
                </p>
                {index.codeclient !== undefined && index.codeclient};
                {index?.sat} {index?.reference}
                {index?.statut}; {index?.raison.toLowerCase()},{' '}
                {index.numero && index.numero};
              </Typography>
            </div>
            <div className="itemButtons">
              {index.reponse.length <= 0 && (
                <div onClick={() => updateDemande(index)}>
                  <Edit fontSize="small" /> <span>Modifier</span>
                </div>
              )}
              <div onClick={(e) => openPopup(index._id, e)}>
                <Message fontSize="small" /> <span>Feedback</span>
              </div>
            </div>
          </div>
        )
      })}

      {_id && (
        <Popup open={open} setOpen={setOpen} title="Message">
          <FormReclamation id={_id} />
        </Popup>
      )}
      {demandeToUpdate && (
        <Popup open={openDemande} setOpen={setOpenDemande} title="Message">
          <UpdateDemande demande={demandeToUpdate} close={setOpenDemande} />
        </Popup>
      )}
    </div>
  )
}

export default Attente
