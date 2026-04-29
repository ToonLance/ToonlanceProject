import React from 'react'
const page = () => {
  return (
    <div>
        <div className='heading'><h1 className=' text-9xl mt-14 text-center'>SHOWREEL</h1></div>
    <div className='flex gap-6 align-bottom  justify-center mt-12 '>
    <video width="400" autoPlay muted loop className='aspect-video   rounded-lg'>
      <source src="projectfile.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        <video width="400" autoPlay muted loop className='aspect-video   rounded-lg'>
      <source src="projectfile.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        <video width="400" autoPlay muted loop className='aspect-video   rounded-lg'>
      <source src="projectfile.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    </div>
  )
}

export default page