import React from 'react'

const Features = (props:{features: string}) => {
    const paragraph = props.features.split('\n\n')
    
  return (
    <div className="px-6 md:px-10 flex flex-col gap-6 mb-[113px]">
        <h5 className="md:mb-2 md:text-3xl">Features</h5>
        <p className="opacity-75">{paragraph[0]}</p>
        <p className="opacity-75">{paragraph[1]}</p>
    </div>
  )
}

export default Features