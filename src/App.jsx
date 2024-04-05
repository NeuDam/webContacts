import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ContactsHandler from './Components/ContactsHandler'
import FormContacts from './Components/FormContacts'

function App() {

  const [data, setData] = useState([
    {
      "name": "John",
      "phone": "1443322554",
      "city": "New York",
      "email": "john@facebook.com",
      "document_id": ""
    }
  ])

  const handlerNewData = (newData) => {

    if ((data.filter((x) => x.phone == newData.phone).length !== 0)){
      alert('THE CONTACT ALREADY EXISTS')
      return
    }

    const tempData = [...data, newData]

    setData(tempData)

    localStorage.setItem('data-contacts',JSON.stringify(tempData))
  }

  const handlerOpenerForm = () => {
    const elementCnForm = document.getElementById('floater-form')
    elementCnForm.classList.toggle('hidden-form')
  }

  const deleteContact = (phoneNumber) => {
    const newData = data.filter((x) => x.phone !== phoneNumber)
    localStorage.setItem('data-contacts', JSON.stringify(newData))
    setData(newData)
  }

  useEffect(() => {
    const data = localStorage.getItem('data-contacts')

    if (data !== null){
      setData(JSON.parse(data))
      return
    }

    localStorage.setItem('data-contacts',JSON.stringify([{
      "name": "John",
      "phone": "1443322554",
      "city": "New York",
      "email": "john@facebook.com",
      "document_id": ""
    }]))

    
  },[])

  return (
    <>
      <Header />
      <main>
        {
          window.screen.width < 767 ? <div className="floater_form" id='floater-form'><FormContacts handlerNewData={handlerNewData}/></div>: <FormContacts handlerNewData={handlerNewData}/>
        }
        <ContactsHandler dataContacts={data} deleteContact={deleteContact} />
      </main>
      {
        window.screen.width < 767 ? <button type="button" className='opener-form' onClick={() => {handlerOpenerForm()}}><box-icon type='solid' name='user-circle' color="white" className="opener-form-child"></box-icon> </button>: ''
      }
      
    </>
  )
}

export default App
