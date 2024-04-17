import { raison } from './Static'

function VoirPlus() {
  return (
    <>
      <ol>
        {raison.map((index) => {
          return <li key={index._id}>{index.raison.toLowerCase()}</li>
        })}
      </ol>
    </>
  )
}

export default VoirPlus
