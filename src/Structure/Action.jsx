/* eslint-disable react/prop-types */
import TextArea from '../Control/TextArea'
import BoutonComponent from '../Control/Bouton'
import React from 'react'
import axios from 'axios'
import { lien } from '../Static'
import DirectionSnackbar from '../Control/SnackBar'

function Action({ id, setOpen }) {
  const [disabled, setDisabled] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [open, setOpenDirection] = React.useState(true)
  const sending = async () => {
    try {
      setDisabled(true)
      const response = await axios.post(lien + '/action', {
        idReponse: id,
        text: value,
      })
      if (response.status === 200) {
        setDisabled(false)
        setOpen(false)
      }
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        setDisabled(false)
        setMessage('Rassurez-vous que votre appareil a une connexion active')
      }
    }
  }
  return (
    <>
        {message && (
          <DirectionSnackbar message={message} open={open} setOpen={setOpenDirection} />
        )}
      <div style={{ margin: '15px 0px', width: '15rem' }}>
        <TextArea
          setValue={setValue}
          value={value}
          placeholder="Renseigner l'action"
        />
      </div>
      <div>
        <BoutonComponent
          disabled={disabled}
          fonction={sending}
          title="Envoyer"
          type="primary"
        />
      </div>
    </>
  )
}

export default Action
