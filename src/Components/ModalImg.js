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
  zIndex: 2000,
  height: '80vh'
  
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'transparent',
  zIndex: 1000
}

export default function ModalImg({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      
      <div style={MODAL_STYLES}>
      
        {children}
      </div>
    </>,
    document.getElementById('portalimg')
  )
}
