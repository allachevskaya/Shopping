import React from 'react'
import {ArtHeader, ArtBox} from '../compotents'

function MainPage({items}) {
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
          
          {
            items.map((obj)=>
              <ArtHeader key={obj.id} obj={obj} />)
          }
        </div>
      </div>
    </div>

    <main className="wrapper-store">
      <div className="store-content _container ">

        <h3 className="content-title -StoreTitle ">
					Beautiful, minimalistic things for an aesthetic life, created for joy.
				</h3>
            

        <div className="store-content-items ">
          {
            items.map((obj)=>
              <ArtBox key={obj.id} obj={obj} />)
          }


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