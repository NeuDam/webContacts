
function FormContacts({handlerNewData}) {


  const handlerOnSubmit = (e) => {
    e.preventDefault()

    const form = document.getElementsByClassName('my-form')[0]
    let data = Object.fromEntries(new FormData(form))

    handlerNewData(data)
    
  }

  return (
    <form className="my-form" autoComplete="off" onSubmit={(e) => {handlerOnSubmit(e)}}>
      <h2 className="sub-title">NEW CONTACT</h2>

      <div className="data-container">
        <label htmlFor="name" className="label_form">Name</label>
        <input type="text" className="input_form" name='name' required placeholder='Adam Smith'/>
        
        <label htmlFor="phone" className="label_form">Phone</label>
        <input type="text" className="input_form" name='phone' required placeholder='3102000694'/>

        <label htmlFor="city" className="label_form">City</label>
        <input type="text" className="input_form" name='city' required placeholder='New York'/>

        <label htmlFor="email" className="label_form">Email</label>
        <input type="email" className="input_form" name='email' placeholder='adam@smith.com'/>

        <label htmlFor="doc_id" className="label_form">Document ID</label>
        <input type="text" className="input_form" name='doc_id' placeholder='001236589'/>

        <button type="submit" className="submit-contact-button">SAVE</button>
      </div>
      

    </form>
  )
}

export default FormContacts