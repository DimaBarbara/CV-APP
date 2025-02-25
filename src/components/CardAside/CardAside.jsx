import React from 'react'

const CardAside = ({ formData }) => {
    console.log(formData );
    
  return (
      <div>
          <img src={formData.photo} alt='UserPhoto' />
          <h3>Personal Details</h3>
          <div>
              <h4>Address
                  <p>{`${formData.address}`} </p>
              </h4>
              <h4>Phone Number
                  <p>{`${formData.phone}`} </p>
              </h4>
              <h4>Email
                  <p>{`${formData.email}`} </p>
              </h4>
          </div>
    </div>
  )
}

export default CardAside