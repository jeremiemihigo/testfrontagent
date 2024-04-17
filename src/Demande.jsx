/* eslint-disable react/prop-types */
import { Input } from 'antd'
import React from 'react'
import { Button, Grid } from '@mui/material'
import axios from 'axios'
import { lien } from './Static'
import DirectionSnackbar from './Control/SnackBar'
import { Language, Send } from '@mui/icons-material'
import {
  Checkbox,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Box,
} from '@mui/material'
import { CreateContexte } from './Context'
import { useSelector } from 'react-redux'
import AutoComplement from './Control/AutoComplete'
import TextArea from './Control/TextArea'
// import UploadImage from './Image'

function Demande() {
  const { title } = React.useContext(CreateContexte)
  const [fichier, setFichier] = React.useState("")
  const [initial, setInitial] = React.useState()
  const [value, setValue] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [open, setOpen] = React.useState(true)
  const [generateLoc, setGenerateLoc] = React.useState(false)
  const [file, setImage] = React.useState()
  const raisonRedux = useSelector((state) => state.raison.raison)

  const [raisonSelect, setRaisonSelect] = React.useState('')
  const [raisonRwrite, setRaisonRwrite] = React.useState("")
  const [autre, setAutre] = React.useState(false)

  const [loadings, setLoadings] = React.useState(false)

  const handleChange = (e) => {
    setMessage('')
    const { value, name } = e.target
    setInitial({ ...initial, [name]: value })
  }

  const [location, setLocation] = React.useState(null)

  function success(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const altitude = position.coords.altitude
    setLocation({ latitude, longitude, altitude })
    setGenerateLoc(false)
  }
  function error() {
    setMessage('Unable to retrieve your location')
  }
  function handleLocationClick() {
    setGenerateLoc(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      setMessage('Geolocation not supported')
      setGenerateLoc(false)
    }
  }
  const sendData = async (e) => {
    try {
      setLoadings(true)
      e.preventDefault()
      if (
        !initial?.reference ||
        !initial?.sat ||
        !initial?.cell ||
       (raisonSelect === "" && raisonRwrite === "") ||
        !file ||
        value === ''
      ) {
        setMessage(
          "Veuillez renseigner les champs ayant l'asterisque ainsi que la photo",
        )
      } else {
        setMessage('')
        let raison = autre ? raisonRwrite : raisonSelect?.raison
      
        const datas = new FormData()
        datas.append('file', file)
        datas.append('longitude', location?.longitude)
        datas.append('latitude', location?.latitude)
        datas.append('altitude', location?.altitude)
        datas.append('codeAgent', localStorage.getItem('codeAgent'))
        datas.append('codeZone', localStorage.getItem('codeZone'))
        datas.append('idShop', localStorage.getItem('shop'))
        datas.append('codeclient', initial?.codeclient)
        datas.append('statut', value)
        datas.append('raison', raison)
        datas.append('sector', initial?.sector) //placeholder = Sector/constituency
        datas.append('cell', initial?.cell) //placeholder = Cell/Ward
        datas.append('reference', initial?.reference) //placeholder = Reference
        datas.append('sat', initial?.sat)
        datas.append('numero', initial?.numero)
        datas.append('commune', initial?.commune)
      //   let donnes = {}
      //  donnes.file = fichier[0]?.thumbUrl
      //   donnes.longitude = location?.longitude
      //   donnes.latitude=  location?.latitude
      //   donnes.altitude= location?.altitude
      //   donnes.codeAgent= localStorage.getItem('codeAgent')
      //   donnes.codeZone= localStorage.getItem('codeZone')
      //   donnes.idShop = localStorage.getItem('shop')
      //   donnes.codeclient= initial?.codeclient
      //   donnes.statut= value
      //   donnes.raison= raison
      //   donnes.sector= initial?.sector
      //   donnes.cell= initial?.cell
      //   donnes.reference= initial?.reference
      //   donnes.sat= initial?.sat
      //   donnes.numero= initial?.numero
      //   donnes.commune= initial?.commune
      //   console.log(donnes)
        const response = await axios.post(lien + '/demande', datas)
       console.log(response)
        
        if (response.data?._id) {
          setLocation(null)
          const form = document.getElementById('formDemande')
          const fileInput = form.querySelector('input[type="file"]')
          fileInput.value = ''
          setInitial()
          // setImage()
          setFichier("")
          setAutre(false)
          setRaisonSelect('')
          setValue('')
          setMessage('Enregistrement effectuer : ' + response.data.idDemande)
        }
        if (response.status === 201) {
          setMessage(`${response.data} << connectez-vous de nouveau >>`)
          localStorage.removeItem('auth')
        }
      }
      setLoadings(false)
    } catch (error) {
      console.log(error)
      setLoadings(false)
      if (error.code === 'ERR_NETWORK') {
        setMessage('Rassurez-vous que votre appareil a une connexion active')
      }
    }
  }

  const returnValue = (champs) => {
    if (initial && initial['' + champs]) {
      return initial['' + champs]
    } else {
      return ''
    }
  }

  const changeRaison=()=>{
    setRaisonRwrite("")
    setRaisonSelect("")
    setAutre(!autre)
  }
console.log(fichier)
  return (
    <>
      <div className="titre">
        <img src="/bboxx.png" alt="bboxxPages" />
        <p> {title}</p>
      </div>
      <form id="formDemande">
        {message && (
          <DirectionSnackbar message={message} open={open} setOpen={setOpen} />
        )}
       
        <div style={{ marginBottom: '10px' }}>
          <Input
            placeholder="Code client"
            name="codeclient"
            value={returnValue('codeclient')}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div style={{ marginBottom: '11px' }}>
          <Input
            required
            name="commune"
            value={returnValue('commune')}
            onChange={(e) => handleChange(e)}
            placeholder="Commune *"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input
            required
            name="sector"
            value={returnValue('sector')}
            onChange={(e) => handleChange(e)}
            placeholder="Quartier *"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input
            name="cell"
            value={returnValue('cell')}
            onChange={(e) => handleChange(e)}
            placeholder="Avenue *"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input
            name="reference"
            value={returnValue('reference')}
            onChange={(e) => handleChange(e)}
            placeholder="Référence *"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input
            name="sat"
            value={returnValue('sat')}
            onChange={(e) => handleChange(e)}
            placeholder="Sat *"
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
         {/* <UploadImage setFile={setFichier} /> */}
        
          <input
            onChange={(event) => {
              const file = event.target.files[0]
              setImage(file)
            }}
            type="file"
            accept=".png, .jpg, .jpeg"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  onClick={() => setValue('allumer')}
                  control={
                    <Checkbox checked={value === 'allumer'} name="allumer" />
                  }
                  label="Allumé"
                />
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset" sx={{ m: 1 }} variant="standard">
              <FormLabel component="legend"></FormLabel>
              <FormGroup>
                <FormControlLabel
                  onClick={() => setValue('eteint')}
                  control={
                    <Checkbox checked={value === 'eteint'} name="eteint" />
                  }
                  label="Eteint"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </div>
        <div style={{ marginBottom: '10px' }}>
          {autre ? (
            <TextArea
              setValue={setRaisonRwrite}
              value={raisonRwrite}
              placeholder="Mentionnez le feedback *"
            />
          ) : (
            raisonRedux && (
              <AutoComplement
                value={raisonSelect}
                setValue={setRaisonSelect}
                options={raisonRedux}
                title="Selectionnez le feedback *"
                propr="raison"
              />
            )
          )}

          <p
            onClick={() => changeRaison()}
            style={{
              fontSize: '12px',
              textAlign: 'right',
              cursor: 'pointer',
              color: 'blue',
              fontWeight: 'bolder',
              margin: '5px',
            }}
          >
            {autre ? "Choisir la selection du feedback":"Mentionnez le feedback"}
          </p>
        </div>
        <div style={{ marginTop: '10px' }}>
          <Input
            value={returnValue('numero')}
            placeholder="Numero joignable du client"
            name="numero"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div
          style={{
            textAlign: 'center',
            backgroundColor: '#dedede',
            borderRadius: '20px',
            padding: '10px',
            margin: '10px',
          }}
        >
          <p>
            long : {location?.longitude}
            {' lat : '}
            {location?.latitude}
          </p>
        </div>
        <Grid container>
          <Grid item xs={6}>
            <Button
              color="secondary"
              variant="contained"
              disabled={generateLoc}
              fullWidth
              onClick={handleLocationClick}
            >
              <Language fontSize="small" />
              <span style={{ marginLeft: '10px' }}>
                {generateLoc && 'Patientez...'}
              </span>
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{ marginLeft: '10px' }}
              fullWidth
              className="primary"
              variant="contained"
              onClick={(e) => sendData(e)}
              disabled={loadings}
            >
              <Send fontSize="small" />
              <span style={{ marginLeft: '10px' }}>
                {loadings && 'Patientez...'}
              </span>
            </Button>
          </Grid>
        </Grid>

        <div style={{ marginTop: '10px' }}>
          <p>
            Rassurez-vous que vous etes chez le client pour une meilleure
            géolocalisation
          </p>
        </div>
        <div></div>
      </form>
    </>
  )
}

export default Demande
