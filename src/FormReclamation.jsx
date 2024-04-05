/* eslint-disable react/prop-types */
import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { lien } from './Static'
import DirectionSnackbar from './Control/SnackBar'
import TextArea from './Control/TextArea'

function FormReclamation({ id, data, setData, close }) {
  const [initial, setInitial] = React.useState('')
  const [sending, setSendIng] = React.useState(false)
  const [open, setOpen] = React.useState(true)
  const [message, setMessage] = React.useState()

  const sendData = async (e) => {
    e.preventDefault()
    setSendIng(true)
    try {
      const response = await axios.post(lien + '/reclamation', {
        _id: id,
        codeAgent: localStorage.getItem('codeAgent'),
        sender: 'agent',
        message: initial,
      })

      if (response.data[0]?.message) {
        setData([...data, response.data[0]])
        setInitial('')
      }
      if (response.status === 201) {
        setMessage(response.data)
      }
      close(false)
      setSendIng(false)
    } catch (error) {
      setSendIng(false)
      console.log(error)
    }
  }
  return (
    <div>
      {message && (
        <DirectionSnackbar message={message} open={open} setOpen={setOpen} />
      )}
      <div style={{marginTop:"10px"}}>
      <TextArea value={initial} setValue={setInitial} placeholder="Message" />
      </div>
      <Button
        disabled={sending}
        onClick={(e) => sendData(e)}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: '10px' }}
      >
        Envoyer
      </Button>
    </div>
  )
}

export default FormReclamation
