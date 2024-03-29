/* eslint-disable react/prop-types */
import { lien_image } from '../Static'
import React from 'react'
import '../demandeListe.css'
import { Paper, Typography } from '@mui/material'
import Popup from '../Control/Popup'
import FormReclamation from '../FormReclamation'
import { message, Input } from 'antd'
import { Message } from '@mui/icons-material'
import moment from 'moment'

function Liste({ donner }) {
  const [validates, setValidate] = React.useState('')
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
  const [_id, setId] = React.useState()

  const openPopup = (index, e) => {
    e.preventDefault()
    setId(index)
    setOpen(true)
  }
  const [filterFn, setFilterFn] = React.useState({
    fn: (items) => {
      return items
    },
  })
  const handleChange = (e) => {
    let target = e.target.value.toUpperCase()

    setFilterFn({
      fn: (items) => {
        if (target === '') {
          return items
        } else {
          return items.filter((x) => x.reponse[0].codeclient.includes(target))
        }
      },
    })
  }

  return (
    <>
      {contextHolder}
      <div style={{marginBottom:"10px"}}>
      <Input
        onChange={(e) => handleChange(e)}
        placeholder="Recherchez un code client"
      />
      </div>
      <div className='listeReponses'>
      {filterFn.fn(donner).map((index) => {
        return (
          <React.Fragment key={index._id}>
            <Paper
              className="paper"
              onClick={() => setValidate(index.reponse[0].codeclient)}
            >
              <p>
                {index.reponse[0].codeclient +
                  '; ' +
                  index.reponse[0].PayementStatut}
                <span
                  style={{ float: 'right', fontSize: '10px', color: 'red' }}
                >
                  {moment(index.reponse[0].createdAt).fromNow()}
                </span>
              </p>
            </Paper>
            <>
              {validates === index.reponse[0].codeclient && (
                <>
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
                      </p>
                      {index.codeclient !== undefined && index.codeclient};
                      {index?.sat} {index?.reference}
                      {index?.statut}; {index?.raison.toLowerCase()},{' '}
                      {index.numero && index.numero};
                    </Typography>
                  </div>
                  <div className="itemButtons">
                    <div>
                      <span>Done</span>
                    </div>
                    <div onClick={(e) => openPopup(index._id, e)}>
                      <Message fontSize="small" /> <span>Feedback</span>
                    </div>
                  </div>
                  <div>
                    <div className="reponseListe">
                      <p>
                        {index.reponse[0]?.codeclient};{' '}
                        {' ' + index.reponse[0]?.nomClient.toUpperCase()}
                      </p>
                      <p>
                        statut client :{' '}
                        <span style={{ fontWeight: 'bolder' }}>
                          {index.reponse[0]?.clientStatut}
                        </span>
                      </p>
                      <p>
                        statut payement
                        <span style={{ fontWeight: 'bolder' }}>
                          {index.reponse[0]?.PayementStatut}
                        </span>{' '}
                      </p>
                      <p>
                        cons.Exp.Days :{' '}
                        <span style={{ fontWeight: 'bolder' }}>
                          {index.reponse[0]?.consExpDays}
                        </span>
                      </p>
                      <p>{index.reponse[0]?.codeCu}</p>
                    </div>
                  </div>
                </>
              )}
            </>
          </React.Fragment>
        )
      })}

      </div>

      {_id && (
        <Popup open={open} setOpen={setOpen} title="Message">
          <FormReclamation id={_id} />
        </Popup>
      )}
    </>
  )
}

export default Liste
