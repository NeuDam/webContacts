import ContactCard from "./ContactCard"

function ContactsHandler({ dataContacts, deleteContact }) {

  if (dataContacts.length === 0){
    return (
      <section className="container-contacts">
        <p>No Contacts</p>
      </section>
    )
  }

  return (
    <section className='container-contacts'>
      {
        dataContacts.map((contact) => {
          return <ContactCard key={contact.phone} data={contact} deleteContact={deleteContact}/>
        })
      }
    </section>
  )
}

export default ContactsHandler