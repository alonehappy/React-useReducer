import React, { useEffect } from 'react'
import './alert.css'
import { FaExclamationCircle,FaTimes } from 'react-icons/fa'

const Alert = ({onCloseAlert,alertClass,alertContent}) => {
  useEffect (()=>{
   const int= setTimeout(() => {
       onCloseAlert()
    }, 3000);
    return ()=>{
      clearTimeout(int)
    }
  })
  return (
    <>
      <div className={`alert ${alertClass}`}>
      <FaExclamationCircle size={16} className='icon-x'/>
      <span className='msg'>{alertContent}</span>
      <div className='close-btn' onClick={onCloseAlert}>
        <FaTimes size={19} className='icon-x'/>
      </div>
      </div>
    </>
  )
}

export default Alert