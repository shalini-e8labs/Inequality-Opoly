import React from 'react'
import { CardNumberElement,CardCvcElement,CardExpiryElement } from '@stripe/react-stripe-js';
import './css/Tutorials.css';
const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: '25px',
        color: '#000',
        height:'70px !important',
        padding:'0 23px',
        border:'2px solid #532e1f',
        fontFamily:'Bangers',
        fontWeight: 400,
        fontStyle:'italic',
        textAlign:'left',
        paddingTop:'20px',
        '::placeholder': {
          color: '#706d5f',
          fontWeight: 400,
          fontFamily:'Bangers',
          textAlign:'left',
        },
        
      },
      invalid: {
        color: "red",
        ":focus": {
          color: "red",
        },
      },
    },
  };
export default function CardSection() {
    return (
        <>
            <div className="login_input ">
                <CardNumberElement className="login_input_stripe" options={CARD_ELEMENT_OPTIONS}/>
            </div>
            <div className="login_input payment_input">
                <div className="login_input-inner">
                    <CardCvcElement  className="login_input_stripe" options={CARD_ELEMENT_OPTIONS}/>
                </div>
                <div className="login_input-inner">
                    <CardExpiryElement  className="login_input_stripe" options={CARD_ELEMENT_OPTIONS}/>
                </div>
            </div>
            <div className="login_input">
                <input type="text" placeholder="BILLING ZIP CODE"/>
            </div>
        </>
    )
}
