import React from 'react'

const Button = (props: {btn: string, children: React.ReactNode}) => {
  return (
    <button className={props.btn}>{props.children}</button>
  )
}

export default Button