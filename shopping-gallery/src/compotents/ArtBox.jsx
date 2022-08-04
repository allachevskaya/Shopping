import React from 'react'

function ArtBox({obj}) {
  return (
    <div className="item">
            <img
                className="box _store"
                src={obj.imageUrl}
                alt="Art"
            />
            <div className="item-title">
              <h4 className="art-name ">{obj.name}</h4>
              <p className="art-author ">{obj.author}</p>
              <p className="art-year">{obj.year}</p>
            </div>
            <div className="store-btn ">
              buy
              <span className="active">i</span>
            </div>
          </div>
  )
}

export default ArtBox