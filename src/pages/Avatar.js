import React from 'react'

export default function Avtar({ avtars }) {
  return (
    <div className='p-10'>
      <div className='font-bold text-center'>
        <h1 className='text-7xl'>Avtars</h1>
        <p className='mt-5'>All of the Avtars that appered in the show:</p>
      </div>
      <ul>
        <div className='grid grid-cols-3 mt-10'>
          {avtars.map(av => {
            return (
              <li className='p-5' key={av.id}>
                <p>{av.title}</p>
                <img src={av.url} width="100%" alt=''/>
              </li>
            )
          })}
        </div>
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const avtars = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());
  return {
    props: {
      avtars
    }
  }
}
// https://jsonplaceholder.typicode.com/photos