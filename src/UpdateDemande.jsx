/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Input } from 'antd'
import React, { useEffect } from 'react'
import Selected from './Control/Select'
import { Button, Grid } from '@mui/material'
import axios from 'axios'
import { lien, lien_image } from './Static'
import DirectionSnackbar from './Control/SnackBar'
import { Language, Send, Clear } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import AutoComplement from './Control/AutoComplete'

function UpdateDemande({ demande }) {
  const [initial, setInitial] = React.useState()
  const [value, setValue] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [open, setOpen] = React.useState(true)
  const [generateLoc, setGenerateLoc] = React.useState(false)
  const [file, setImage] = React.useState()
  const raisonRedux = useSelector((state) => state.raison?.raison)
  const [valueRaison, setValueRaison] = React.useState('')
  const [showAutre, setAutre] = React.useState(false)
  React.useEffect(() => {
    if (valueRaison !== '' && valueRaison.raison === 'Autres') {
      setAutre(true)
    }
  }, [valueRaison])

  const [loadings, setLoadings] = React.useState(false)

  const handleChange = (e) => {
    setMessage('')
    const { value, name } = e.target
    setInitial({ ...initial, [name]: value })
  }
  const donnerStat = [
    { id: 1, value: 'allumer', title: 'Allumé' },
    { id: 2, value: 'eteint', title: 'eteint' },
  ]
  const [location, setLocation] = React.useState(null)

  function success(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const altitude = position.coords.altitude
    setLocation({ latitude, longitude, altitude })
    setGenerateLoc(false)
  }
  function error() {
    console.log('Unable to retrieve your location')
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
        !initial?.sector
      ) {
        setMessage('Veuillez renseigner les champs')
      } else {
        setMessage('')
        let raison = showAutre ? initial?.raison : valueRaison?.raison
        const datas = new FormData()
        datas.append('file', file)
        datas.append('longitude', location?.longitude)
        datas.append('latitude', location?.latitude)
        datas.append('altitude', location?.altitude)
        datas.append('codeAgent', localStorage.getItem('codeAgent'))
        datas.append('codeZone', localStorage.getItem('codeZone'))
        datas.append('codeclient', initial?.codeclient)
        datas.append('statut', value)
        datas.append('raison', raison)
        datas.append('sector', initial?.sector) //placeholder = Sector/constituency
        datas.append('cell', initial?.cell) //placeholder = Cell/Ward
        datas.append('reference', initial?.reference) //placeholder = Reference
        datas.append('sat', initial?.sat)
        datas.append('numero', initial?.numero)
        datas.append('commune', initial?.commune)
        datas.append("id", demande._id)

        const response = await axios.put(lien + '/updateDemande', datas)

        if (response.data?._id) {
          setLocation(null)
          const form = document.getElementById('formDemande')
          const fileInput = form.querySelector('input[type="file"]')
          fileInput.value = ''
          setValueRaison('')
          setAutre(false)
          setMessage('Done : ' + response.data.idDemande)
          setInitial()
          setValue('')
        }
        if (response.status === 201) {
          setMessage(response.data)
        }
      }

      setLoadings(false)
    } catch (error) {
      console.log(error)
    }
  }

  const returnValue = (champs) => {
    if (initial && initial['' + champs] && initial['' + champs] !== "undefined" ) {
      return initial['' + champs]
    } else {
      return ''
    }
  }

  useEffect(() => {
    setInitial({ ...demande })
    if (raisonRedux.filter((x) => x.raison === demande.raison).length > 0) {
      setValueRaison(raisonRedux.filter((x) => x.raison === demande.raison)[0])
    }
    setLocation({
      latitude: demande.coordonnes.latitude,
      longitude: demande.coordonnes.longitude,
      altitude: demande.coordonnes.altitude,
    })
    // donnerStat.filter(x=>x.value === demande.statut)
    setValue(demande.statut)
  }, [demande])

  return (
    <>
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
        <div style={{ marginBottom: '10px' }}>
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
          <input
            onChange={(event) => {
              const file = event.target.files[0]
              setImage(file)
            }}
            type="file"
            accept=".png, .jpg, .jpeg"
          />
          {file && <img src={file} alt="fichiers" />}
        </div>
        <div style={{ marginBottom: '10px' }}>
          
          {demande && <img width={100} height={100} src={`${lien_image}/${demande.file}`} alt="fichiers" />}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Selected
            label="Statut du client"
            data={donnerStat}
            value={value}
            setValue={setValue}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          {!showAutre && (
            <AutoComplement
              value={valueRaison}
              setValue={setValueRaison}
              options={raisonRedux}
              title="Selectionnez le feedback"
            />
          )}
          {showAutre && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '80%' }}>
                <Input
                  value={returnValue('raison')}
                  placeholder="Feedback || Raison de non payement *"
                  name="raison"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div
                onClick={() => {
                  setValueRaison('')
                  setAutre(false)
                }}
                style={{ width: '10%', marginLeft: '10px', color: 'red' }}
              >
                <Clear />
              </div>
            </div>
          )}
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

export default UpdateDemande
