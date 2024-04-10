import { useSelector } from 'react-redux'

function VoirPlus() {
  const raison = useSelector(state=>state.raison?.raison)
  return (
    <ol>
      {raison && raison?.map(index=>{
        return <li key={index._id}>{index.raison.toLowerCase()}</li>
      })}
    </ol>
  )
}

export default VoirPlus