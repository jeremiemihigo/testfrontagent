/* eslint-disable react/prop-types */
// import {  lien_image } from './Static'
import './demandeListe.css'
import Valide from './Structure/Valide'
import Attente from './Structure/Attente'
import NonConforme from './Structure/NonConforme'

function Liste({ lot }) {
  const { donner, critere } = lot

  return (
    <div className="listeAll">
      <div className="liste">
        {critere === 'valide' && (
          <Valide
            donner={donner}
            
          />
        )}
        {critere === 'attentes' && <Attente donner={donner} />}
        {critere === 'nConformes' && <NonConforme donner={donner} />}

        {/* {donner &&
          filterFn.fn(donner).map((index) => {
            return (
              <div key={index._id} className="messagesToutes">
                {critere === 'valide' && (
                  <Valide
                    index={index}
                    setValidate={setValidate}
                    validates={validates}
                  />
                )}
                
              </div>
            )
          })} */}
      </div>

      {/* {_id && (
        <Popup open={open} setOpen={setOpen} title="Message">
          <FormReclamation id={_id} />
        </Popup>
      )} */}
    </div>
  )
}

export default Liste
