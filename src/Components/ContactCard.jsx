import Atropos from 'atropos/react';
import { Link } from 'react-router-dom';

function ContactCard({data, deleteContact}) {

  const handlerOnDelete = () => {
    deleteContact(data.phone)
  }

  return (  
    <Atropos 
      className='my-atropos'
      activeOffset={60}
      highlight={true}
      shadowOffset={40}
    >
      <img src="/arboles.avif" alt="" data-atropos-offset={2}/>
      <div className="blur-effect"></div>
      <button type="button" className='delete-contact' onClick={() => {handlerOnDelete()}}><box-icon name='trash' type='solid' color='#ff0606' ></box-icon></button>
      <h3 className="name" data-atropos-offset={12}>{data.name}</h3>
      <span className="phone" data-atropos-offset={5}>{data.phone}</span>
      <Link to={data.phone}>
        <button type="button" className='more-info-button'>MORE INFO.</button>
      </Link>
    </Atropos>
  )
}

export default ContactCard