import React from 'react'

const CardMain = ({formData}) => {
  return (
      <div>
          <div>
              <h3>
                  Description
              </h3>
              <div>
                  {formData.description}
              </div>
          </div>
          <div>
              <h3>
                  Experience
              </h3>
              <div>
                  <p>{formData.fromExp} - {formData.toExp}</p>
                  <div>
                  <p>{formData.position}</p>
                  <p> {formData.company.length > 0 ? `${formData.company}, ${formData.city}` : ''}</p>
                  </div>
              </div>
          </div>
          <div>
              <h3>
                  Education
              </h3>
              <div>
                  <p>{formData.fromEdu} - {formData.toEdu}</p>
                  <div>
                  <p>{formData.university.length > 0 ? `${formData.university}, ${formData.cityEdu}` : ''} </p>
                      <p>{formData.degree.length > 0 ? `Degree:${formData.degree}` : '' }</p>
                      <p>{formData.subject.length > 0 ? `Subject:${formData.subject}` : '' }</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default CardMain