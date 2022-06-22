import React from 'react'

interface formElement{
    inputType: 'text' | 'radio';
    placeholder?: string,
    label: string,
    id: string
}

const FormElement = (props: formElement) => {
  return (
    <>
        {props.inputType === 'text' ?
            <div >
                <label className='font-bold text-[12px] leading-4 tracking-tight mb-[20px]' htmlFor={props.id}>
                    {props.label}
                    <div className='w-[309px] h-14 border border-bordercol hover:border-brown active:border-brown
                    rounded-lg flex items-center  mt-[9px] overflow-hidden'>
                        <input className=' overline tracking-tight normal-case text-black w-full 
                        outline-none font-bold h-full px-6'
                        type="text" placeholder="Insert your name" id={props.id}/>
                    </div>
                </label>
            </div> 
            :
            <div className='w-[309px] h-14 border border-bordercol hover:border-brown active:border-brown
            rounded-lg flex items-center  mt-[9px] overflow-hidden gap-4 px-4'>
                <input type="radio" id={props.id} className="w-5 h-5"/>
                <label htmlFor={props.id} className='font-bold text-black2'>{props.label}</label>
            </div> 
        }
    </>
  )
}

export default FormElement