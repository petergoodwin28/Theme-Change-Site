import React from 'react'

function Hero(props: { image: string }) {

    let {image} = props
  return (
    <div className='hero bg-[image] border-t-2 mb-32'>
        <p style={{ backgroundImage: `${image}`}}>In the Grim Dark Future, There is Only War. </p>
        {/* 
            In the Grim Dark Future, There is Only War. 
            For in the Grim Dark Future, There is Only War
        
        
        */}
    </div>
  )
}

export default Hero