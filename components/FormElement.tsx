import React from 'react'

type formElement = {
    inputType: string;
    placeholder?: string,
    label: string,
    id: string,
    className?: string
}

const FormElement = (props: formElement) => {
  return (
    <>
        {props.inputType !== 'radio' ?
            <>
                <label className={  `${props.className} font-bold text-[12px] leading-4 tracking-tight`} htmlFor={props.id}>
                    {props.label}
                    <div className='min-w-[309px] w-full h-14 border-2 border-bordercol hover:border-brown active:border-brown
                    rounded-lg flex items-center  mt-[9px] overflow-hidden'>
                        <input className=' overline tracking-tight normal-case text-black w-full 
                        outline-none font-bold h-full px-6'
                        type={props.inputType} placeholder={props.placeholder} id={props.id}/>
                    </div>
                </label>
            </> 
            :
            <div className={`${props.className} min-w-[309px] w-full h-14 border-2 border-bordercol hover:border-brown active:border-brown
            rounded-lg flex items-center  overflow-hidden gap-4 px-4`}>
                <input type="radio" id={props.id} className="w-5 h-5"/>
                <label htmlFor={props.id} className='font-bold text-black2 text-sm'>{props.label}</label>
            </div> 
        }
    </>
  )
}

export default FormElement