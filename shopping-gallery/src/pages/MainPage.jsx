import React from 'react'

function MainPage() {
  return (

  <div className="wrapper">
    <div className="header-wrapper">
      <header className="header">
        <div className="header-logo">
          <h1 className="header-title">Lachevsky</h1>
          <h1 className="header-Subtitle">Online store</h1>
        </div>
      </header>
      <div className="header-content">
        <div className="content-boxes">
          <div className="box _content">"" src="Пикассо_мальчикТрубка.jpg</div>
          <div className="box _content">"" src="21.jpg</div>

          <div className="box _content">"" src="Пикассо_Девушка.jpg</div>

          <div className="box _content">"" src="Пикассо_двеСестры.jpg</div>
          <div className="box _content">"" src="Климт.jpg</div>
          <div className="box _content">"" src="ДевушкаЖемчуг.jpg</div>
          <div className="box _content">"" src="Босх.jpg</div>
          <div className="box _content">"" src="Демо1.jpg</div>

          <div className="box _content">"" src="БосхСуд.jpg</div>
          <div className="box _content">"" src="Константинов.jpg</div>
          <div className="box _content">"" src="Пикассо_зеленыеНогти.jpg</div>
          <div className="box-empy">"" src="Демо1.jpg</div>
        </div>
      </div>
    </div>

    <main className="wrapper-store">
      <div className="store-content _container ">

        <h3 className="content-title -StoreTitle ">
					Beautiful, minimalistic things for an aesthetic life, created for joy.
				    </h3>

        <div className="store-content-items ">
          <div className="item">
            <div className="box _store ">
              "" src="Лдште.jpg"
            </div>
            <div className="item-title">
              <h4 className="art-name ">name Art</h4>
              <p className="art-author ">art-author</p>
              <p className="art-year">art-year</p>
            </div>
            <div className="store-btn ">
              buy
              <span className="active">i</span>
            </div>
          </div>
          <div className="item">
            <div className="box _store">
              "" src="500x500.jpg"
            </div>
            <div className="item-title">
              <h4 className="art-name">name Art</h4>
              <p className="art-author">art-author</p>
              <p className="art-year">art-year</p>
            </div>
            <div className="store-btn">
              buy
            </div>
          </div>
          <div className="item">
            <div className="box _store">
              "" src="21.jpg"
            </div>
            <div className="item-title">
              <h4 className="art-name">name Art</h4>
              <p className="art-author">art-author</p>
              <p className="art-year">art-year</p>
            </div>
            <div className="store-btn">
              buy
            </div>
          </div>
          <div className="item">
            <div className="box _store">
              "" src="395353-demo.jpg"
            </div>
            <div className="item-title">
              <h4 className="art-name">name Art</h4>
              <p className="art-author">art-author</p>
              <p className="art-year">art-year</p>
            </div>
            <div className="store-btn">
              buy
            </div>
          </div>
          

        </div>

        <div className="store-title-deliver">
          <h3 className="content-title _deliverTititle">
							About delivery
					</h3>
          <p className="content-title _SubTitle ">
            We are located in St. Petersburg. You can independently pick up the purchase from the pickup point or order delivery by courier around the city within the Ring Road. Delivery by mail throughout Russia is also available.
          </p>
        </div>
      </div>
    </main>

    <footer className="footer">
      <div className="footer-сontacts">
        <h3 className="content-title _сontactsTitle">Contacts</h3>
        <p className="content-title _SubTitle">We always strive to make friends with our customers, call and email us for any questions.
        </p>
        <p className="content-title _SubTitle сontacts"><span>Phone:</span> +123 478 456 3489</p>
        <p className="content-title _SubTitle сontacts"><span>E-mail:</span> hello@instore.com</p>
      </div>
    </footer>

  </div>

  )
}

export default MainPage