import React from 'react'
import { NavLink } from 'react-router-dom'


const SIgn_img = () => {
    return (
        <>
            <div className="right_data mt-5" style={{ width: "100%" }}>
                <h1 style={{maxWidth: 500 }}>HartleyLab Tecnology </h1>
                <div className="sign_img mt-5">
                    <img src="./sign.svg" style={{ maxWidth: 500 }} alt="" />
                    <p className='mt-3'>We hope you find what you're looking for and that you enjoy your stay. <span>😊</span> </p>

                </div>
            </div>

        </>
    )
}

export default SIgn_img