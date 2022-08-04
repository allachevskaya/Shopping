import React from 'react'

function ArtHeader({obj}) {
  return (
    <div className="box _content">
        <img
                className="box _store"
                src={obj.headerImage}
                alt="Art"
            />
    </div>
        
  )
}

export default ArtHeader