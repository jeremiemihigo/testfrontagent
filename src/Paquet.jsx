/* eslint-disable react/prop-types */
import axios from 'axios'
import { lien, config } from './Static.jsx'
import React from 'react'
import { CircularProgress, Box } from '@mui/material'
import Liste from './Liste.jsx'
import './style.css'
import { CreateContexte } from './Context.jsx'
import { useNavigate } from 'react-router-dom'
import VoirPlus from './VoirPlus.jsx'
import Popup from './Control/Popup.jsx'

function Paquet() {
  const [data, setData] = React.useState()
  const [load, setLoad] = React.useState(false)
  const [lotSelect, setLotSelect] = React.useState()
  const [open, setOpen] = React.useState(false)
  const navigation = useNavigate()

  const { title, handleChangeTitle } = React.useContext(CreateContexte)
  const loading = async () => {
    setLoad(true)
    try {
      const response = await axios.get(`${lien}/paquet`, config)
      if (response.status === 201) {
        localStorage.removeItem('auth')
        localStorage.removeItem('codeAgent')
        localStorage.removeItem('codeZone')
        localStorage.removeItem('nom')
        localStorage.removeItem('shop')
        navigation('/', { replace: true })
      } else {
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
                <div
                  key={index._id}
                  className={index.active ? 'lot lotActive' : 'lot'}
                >
                  <div className="titleLot">{index._id}</div>
                  <div className="contentLot">
                    <div
                      onClick={() =>
                        choisirLot(index.valide, 'valide', 'Validées')
                      }
                    >
                      <p className="contentTitle">Valides</p>
                      <p className="contentData">{index.valide.length}</p>
                    </div>
                    <div
                      onClick={() =>
                        choisirLot(index.attente, 'attentes', 'En attente')
                      }
                    >
                      <p className="contentTitle">En attentes</p>
                      <p className="contentData">{index.attente.length}</p>
                    </div>
                    <div
                      onClick={() =>
                        choisirLot(
                          index.nConforme,
                          'nConformes',
                          'Non conformes',
                        )
                      }
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
      <div style={{ marginTop: '12px' }}>
        <p className='titreName'>
          Hello
          <strong>
          { " "+
            localStorage.getItem('nom').split(' ')[
              localStorage.getItem('nom').split(' ').length - 1
            ]
          }
          </strong>
          !! Ce message concerne la manière dont vous devez compléter le champ feedback du client.
        </p>
       
        <ol>
          <li>En complétant ce champ, la plateforme vous propose une liste de feedbacks similaires à ce que vous écrivez. <span onClick={()=>setOpen(true)} style={{color:"blue", cursor:"pointer", marginLeft:"10px"}}>plus</span></li>
          <li>Si le feedback existe dans la liste proposée, veuillez cliquer dessus et continuer la suite</li>
        </ol>
        <p
           className='tittreQuestion'
        >
          Si le feedback n&apos;est pas dans la liste proposée
        </p>
        <ol>
          <li>Cliquer sur <strong>Mentionnez le feedback</strong> et</li>
          <li>Remplissez le champs <strong>Feedback</strong></li>
        </ol>
      </div>
      <Popup open={open} setOpen={setOpen} title="Tous les feedback possible">
        <VoirPlus/>
      </Popup>
    </div>
  )
}

export default Paquet
