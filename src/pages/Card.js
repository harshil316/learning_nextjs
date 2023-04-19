import React from 'react'

export default function Card({ card }) {
    return (
        <div>
            <div className='font-bold text-center'>
                <h1 className='text-7xl mt-5'>Avtars</h1>
                <p className='mt-5'>All of the Avtars that appered in the show:</p>
            </div>
            <div className='grid grid-cols-4  mt-9'>
                {card.map(cr => {
                    return (
                        <div key={cr.id} className=' m-6 border-2 rounded-lg bg-gray-500'>
                            <div>
                                <img src={cr.image} className='h-60 border-2 w-screen rounded-lg' alt='' />
                            </div>
                            <div className='p-3'>
                                <p><span className='font-bold text-black'>Name</span>: {cr.firstName}</p>
                                <p><span className='font-bold text-black'>Email</span>: {cr.email}</p>
                                <p><span className='font-bold text-black'>BirthDate</span>: {cr.birthDate}</p>
                                <p><span className='font-bold text-black'>Address</span>: {cr.address.address}</p>
                                <p>{cr.address.city}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const card = await fetch('http://localhost:3004/userdata').then(res => res.json());
    return {
        props: {
            card
        }
    }
}
// https://jsonplaceholder.typicode.com/photos