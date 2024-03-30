// material-ui
import * as React from 'react'
import { Button, Flex } from 'antd'
// third party

import axios from 'axios'
import { lien } from './Static'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Input } from 'antd'

// project import

// assets
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
// ============================|| FIREBASE - LOGIN ||============================ //

const NouvelleInscription = () => {
  const [open, setOpen] = React.useState(true)
  const userConnect = useSelector((state) => state.user?.user)
  const navigation = useNavigate()
  const [password, setPassword] = React.useState({ first: '', second: '' })
  const [message, setMessage] = React.useState('')

  const sendData = async (e) => {
    e.preventDefault()
    try {
      if (password.first !== password.second) {
        setMessage("Le mot de passe n'est pas conforme")
      }else{
        const response = await axios.put(lien + '/userId', {
          codeAgent: userConnect && userConnect.codeAgent,
          ancien: '1234',
          nouvelle: password.first,
        })
        if (response.status === 200) {
          setOpen(false)
          navigation('/operation')
        }
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Typography component="p" sx={{ fontSize: '12px' }}>
            Modifiez le mot de passe par défaut
          </Typography>
        </DialogTitle>
        <DialogContent>
        {message !== '' && (
        <p style={{ fontSize: '12px', marginBottom:"10px", color: 'red' }}>{message}</p>
      )}
          <div style={{marginBottom:"10px"}}>
            <Input
              placeholder="Mot de passe"
              type='password'
              onChange={(e) =>
                setPassword({
                  ...password,
                  first: e.target.value,
                })
              }
            />
          </div>
          <div style={{marginBottom:"10px"}}>
            <Input
            type='password'
              placeholder="Repeter le mot de passe"
              onChange={(e) =>
                setPassword({
                  ...password,
                  second: e.target.value,
                })
              }
            />
          </div>
          <Flex vertical gap="small" style={{ width: '100%' }}>
            <Button onClick={(e) => sendData(e)} type="primary" block>
              Midifier
            </Button>
          </Flex>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default NouvelleInscription
