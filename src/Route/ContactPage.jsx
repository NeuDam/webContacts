
import {useParams} from "react-router-dom"
import Header from "../Components/Header"
import './ContactPage.css'
import { useEffect, useState } from "react"
import Atropos from 'atropos/react';


function ContactPage() {

  let data = JSON.parse(localStorage.getItem('data-contacts'))

  const params = useParams()

  const [photo, setPhoto] = useState('')

  let contactData

  contactData = data.filter((x) => x.phone == params.number)[0]
  

  useEffect(() => {
    const getHuskyPhoto = async() => {
      const response = await fetch('https://dog.ceo/api/breed/husky/images/random')
      const data  = await response.json()
  
      setPhoto(data.message)
    }
    getHuskyPhoto()
  },[])


  return (
    <>
      <Header/> 
      
      <Atropos className="contact_card_full">
        <div className="effect_blurred"></div>
        <img src="/astronaut.jpg" alt="" data-atropos-offset={2}  className="wallpaper-card"/>
        <img src={photo} alt="Husky Image" className="image_contact" />
        <h2 className="name_card" data-atropos-offset={5}>{contactData.name}</h2>
        <section className="main-data-contact">
          <span>City: <strong>{contactData.city}</strong></span>
          <span>Phone Num: <strong>{contactData.phone}</strong></span>
          <span>Document ID: <strong>{contactData.doc_id}</strong></span>
          <span>Email: <strong>{contactData.email}</strong></span>
        </section>
      </Atropos>
    </>
  )
}

export default ContactPage