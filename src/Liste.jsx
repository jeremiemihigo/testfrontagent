/* eslint-disable react/prop-types */
import axios from 'axios'
import { lien, lien_image, config } from './Static'
import React, { useState } from 'react'
import './demandeListe.css'
import { Typography,Checkbox,FormControl,FormLabel,FormControlLabel,FormGroup, CircularProgress, Box } from '@mui/material'
import Popup from './Control/Popup'
import FormReclamation from './FormReclamation'
import { Edit, Message } from '@mui/icons-material'
import UpdateDemande from './UpdateDemande'
import moment from "moment"
import { message } from 'antd';


function Liste({ lot }) {
  const [messageApi, contextHolder] = message.useMessage();
  const success = (texte) => {
    navigator.clipboard.writeText(texte)
    messageApi.open({
      type: 'success',
      content: 'Done '+texte,
      duration: 2,
    });
  };
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
  const [check, seCheck] = useState("")

  const handleChange =(donner)=>{
   try {
    if(check !==""){
      if(check === "valide"){
        return donner.filter(x=> x.reponse.length > 0)
      }
      if(check === "attente"){
        return donner.filter(x=> x.reponse.length === 0)
      }
    }else{
      return donner
    }
   } catch (error) {
    return []
   }
  }

 

  return (
    <div className='listeAll'>
       <>
      {contextHolder}
     
    </>
      {load && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={18} />
        </Box>
      )}
      <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
               onClick={() => seCheck('valide')}
              control={<Checkbox checked={check === 'valide'} name="codeclient" />}
              label="Valide"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" sx={{ m: 1 }} variant="standard">
          <FormLabel component="legend"></FormLabel>
          <FormGroup>
            <FormControlLabel
               onClick={() => seCheck('attente')}
              control={<Checkbox checked={check === 'attente'} name="codevisite" />}
              label="Attente..."
            />
          </FormGroup>
        </FormControl>
      </Box>
      {data &&
        handleChange(data).map((index) => {
          return (
            <div key={index._id} className='messagesToutes'>
             
              <div className="listeImage">
             
                <img src={`${lien_image}/${index.file}`} alt={index._id} />
                <Typography component="p" sx={{ fontSize: '13px' }} >
                <p >ID : {index.idDemande}<span onClick={()=>success(index.idDemande)} style={{marginLeft:"10px",color:"blue", fontWeight:"bolder", cursor:"pointer", textAlign:"center"}}>copy ID</span><span style={{float:"right", fontSize:"10px"}}>{moment(index.createdAt).fromNow()}</span></p>
                  {index.codeclient !== undefined && index.codeclient};
                  {index?.sat} {index?.reference}
                  {index?.statut}; {index?.raison.toLowerCase()},{' '}
                  {index.numero && index.numero};
                  
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
                  {index.conversation.length > 0 && index.conversation.map(item=>{
                    return(
                      <div key={item._id} className={item.sender ==="agent" ? "agent":"callcenter"}>
                        <p className='messageText'>{item.message}</p>
                        <p className='heure'>{moment(item.createdAt).fromNow()}</p>
                      </div>
                    )
                  })
                 
                  }
                </div>
              <div>
                {index.reponse.length > 0 &&
                  index.reponse.map((item) => {
                    return (
                      <div
                        key={item._id}
                        className="reponseListe"
                      >
                        <p>{item.codeclient}</p>
                        <p style={{fontWeight:"bold"}}>{item.nomClient.toUpperCase()}</p>
                        <p>Statut du client : <span style={{fontWeight:"bolder"}}>{item.clientStatut}</span> </p>
                        <p>Statut payement : <span style={{fontWeight:"bolder"}}>{item.PayementStatut}</span></p>
                        <p>
                        consExpDays : <span style={{fontWeight:"bolder"}}>{item.consExpDays}{' jour(s) '}</span> 
                          
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
          <UpdateDemande demande={demandeToUpdate} close={setOpenDemande} loadingData={loadingListe}/>
        </Popup>
      )}
    </div>
  )
}

export default Liste
