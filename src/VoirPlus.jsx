import { useSelector } from 'react-redux'

function VoirPlus() {
  const raison = useSelector(state=>state.raison?.raison)
  return (
    <>
    {raison.length < 1 ? <p style={{textAlign:"center", fontSize:"12px", color:"blue"}}>Loading...</p> :  <ol>
      {raison && raison?.map(index=>{
        return <li key={index._id}>{index.raison.toLowerCase()}</li>
      })}
    </ol> }
    </>
   
  )
}

export default VoirPlus