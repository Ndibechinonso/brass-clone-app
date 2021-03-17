import React from 'react';
import Button from '../Button';
import './Body.css'
import brass from '../../brass.png'
import { Link } from 'react-router-dom'


export default function Body(props) {
  return (
    <div>
      <div className="intro"><p className="coming-soon">COMING SOON</p><p className="loan">Up to ₦10m in financing to support your business.</p></div>

<div className="flexContainer">
      <div className="bodyCard">
        <h5 class="header1">BANK BETTER</h5>
        <h1 className="header2">Made for business
current account .</h1>
        <p class="accountAct">Powerful yet simple. Great human support.
Open an account in <strong>10 minutes!</strong></p>
        <Link to='/login'><Button primary>Login</Button></Link>
        <p class="helpLine"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="home-module--homeHero_caption_helpLine_icon--4KmF0"><polyline points="20 6 9 17 4 12"></polyline></svg><p>If you need any help, call +234-1-700-1760</p></p>
      </div>
<div className="imgDiv"><img src={brass} /></div>
      </div>

    </div>
  )
}