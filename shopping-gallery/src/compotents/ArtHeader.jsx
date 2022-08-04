import React from 'react'

function ArtHeader({obj}) {
  return (
    <div className="box _content">
        <img
                className="box _store"
                src={obj.imageUrl}
                alt="Art"
            />
    </div>

          //   <div className="box _content"> "" src="Пикассо_мальчикТрубка.jpg</div>
          //   <div className="box _content">"" src="21.jpg</div>

          //   <div className="box _content">"" src="Пикассо_Девушка.jpg</div>

          //   <div className="box _content">"" src="Пикассо_двеСестры.jpg</div>
          //   <div className="box _content">"" src="Климт.jpg</div>
          //   <div className="box _content">"" src="ДевушкаЖемчуг.jpg</div>
          //   <div className="box _content">"" src="Босх.jpg</div>
          //   <div className="box _content">"" src="Демо1.jpg</div>

          //   <div className="box _content">"" src="БосхСуд.jpg</div>
          //   <div className="box _content">"" src="Константинов.jpg</div>
          //   <div className="box _content">"" src="Пикассо_зеленыеНогти.jpg</div>
          // <div className="box-empy">"" src="Демо1.jpg</div>
        
  )
}

export default ArtHeader