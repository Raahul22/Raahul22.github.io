import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errror = () => {


    const history = useNavigate();

  return (
    <>
            <div className='container'>
            <div className="error d-flex flex-column justify-content-lg-center align-items-center">
            <h4>Welcome to Home 👻</h4>
                
            <h1>Why We're Here</h1>
            <p>Hartley Lab is a trusted global Digital Product Engineering and Enterprise Modernization company.We integrate experience design, complex engineering and domain expertise to help our clients envision what’s possible and accelerate their transition into tomorrow’s digital businesses.</p>

            <div className="sign_img mt-5">
                    <img src="./sign.svg" style={{ maxWidth: 500 }} alt="" />
                    <p className='mt-3'>We hope you find what you're looking for and that you enjoy your stay. <span>😊</span> </p>

                </div> 
                
                <button className='btn btn-primary' onClick={()=>history("/")}>Redirect Page</button>
            </div>

        </div>
    </>
  )
}

export default Errror