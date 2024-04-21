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
import ImageComponent from '../Control/Image'

function NonConforme({ donner }) {
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
    <>
      {contextHolder}
      <div>
        {donner &&
          donner.map((index) => {
            return (
              <React.Fragment key={index._id}>
                <div className="listeImage">
                  <ImageComponent src={`${lien_image}/${index.file}`} />

                  <Typography component="p" sx={{ fontSize: '13px' }}>
                    code : {index.idDemande}
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
                      copy code
                    </span>
                    <span style={{ float: 'right', fontSize: '10px' }}>
                      {moment(index.createdAt).fromNow()}
                    </span>
                    {index.codeclient !== undefined && index.codeclient};
                    {index?.sat} {index?.reference}
                    {index?.statut}; {index?.raison.toLowerCase()},{' '}
                    {index.numero && index.numero};
                  </Typography>
                </div>
                <div className="itemButtons">
                  {index.reponse.length <= 0 ? (
                    <div onClick={() => updateDemande(index)}>
                      <Edit fontSize="small" /> <span>Modifier</span>
                    </div>
                  ) : (
                    <div>
                      <span style={{ color: 'green', fontWeight: 'bolder' }}>
                        Done
                      </span>
                    </div>
                  )}
                  <div onClick={(e) => openPopup(index._id, e)}>
                    <Message fontSize="small" /> <span>Feedback</span>
                  </div>
                </div>
                {index.double && (
                  <div style={{ margin: '0px', background: '#4684D3' }}>
                    <p
                      style={{
                        fontSize: '12px',
                        color: '#FFFFFF',
                        textAlign: 'center',
                      }}
                    >
                      Cette visite est déjà dans tes visites validées
                    </p>
                  </div>
                )}
                <div>
                  {index.conversation.length > 0 &&
                    index.conversation.map((item) => {
                      return (
                        <div
                          key={item._id}
                          className={
                            item.sender === 'agent' ? 'agent' : 'callcenter'
                          }
                        >
                          <p className="messageText">{item.message}</p>
                          <p className="heure">
                            {moment(item.createdAt).fromNow()}
                          </p>
                        </div>
                      )
                    })}
                </div>
              </React.Fragment>
            )
          })}
      </div>

      {_id && (
        <Popup open={open} setOpen={setOpen} title="Message">
          <FormReclamation id={_id} close={setOpen} />
        </Popup>
      )}
      {demandeToUpdate && (
        <Popup open={openDemande} setOpen={setOpenDemande} title="Message">
          <UpdateDemande demande={demandeToUpdate} close={setOpenDemande} />
        </Popup>
      )}
    </>
  )
}

export default NonConforme
