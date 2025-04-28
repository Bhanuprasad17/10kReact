import React from 'react'
import { formDataRAndL } from '../data/LoginData'

function LoginPage() {
  console.log(formDataRAndL.LoginData.labels)
  console.log(formDataRAndL.LoginData.fields)

  const labels = formDataRAndL.LoginData.labels
  const fields = formDataRAndL.LoginData.fields
  console.log(labels)
  console.log(fields)
  return (
    <>
      <form action="">
        {
          fields.map((field,index)=>{
            return <>
               {/* {console.log(field)} */}
               <label htmlFor={field.id}>{labels[index]}</label>
               <input type={field.type} placeholder={field.placeholder} id={field.id} />
            </>
          })
        }
        <button >SubMit</button>
      </form>

      
    </>
  )
}

export default LoginPage