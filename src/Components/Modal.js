import React from 'react'
import ReactDom from 'react-dom'
import CloseIcon from '@mui/icons-material/Close';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#0d0d0d',
  width:'70%',
  padding: '50px',
  zIndex: 1000,
  height: '80vh'
  
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className="modal__overlay"/>
      
      <div className="modal">
      <div className='project__header'>
        <div className='project__header__button'><CloseIcon onClick={onClose}/></div>
        </div>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}
