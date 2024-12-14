import React from 'react'
import docimg from "../Assets/HomeDoctor-removebg-preview.png"

function Home() {
    return (
        <div className="flex align-middle justify-between w-full h-full bg-slate-200 p-5  ">
            <section className='ml-60 text-3xl'>
                <h3>Transform Your</h3>
                <h3>Health Journey</h3>
                <h3>With</h3>
                <h3>Expert Care</h3>
                <button>Request Appoinment</button>
            </section>
            
            <section className='flex items-center justify-center h-4/6 w-4/12 border shadow-lg rounded-[65%_35%_68%_32%/55%_60%_40%_45%] bg-red-300'>
                <img
                    src={docimg}
                    alt="Doctor image"
                    className='h-60 w-64'
                />
            </section>
        </div>
    )
}

export default Home
