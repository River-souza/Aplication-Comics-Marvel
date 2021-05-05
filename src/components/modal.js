/* 
    Name do Projeto : Aplication Comics Marvel
    Created on : 01/05/2021.
    Change on : 04/05/2021.
    Author     : Michael Dydean
*/
import React from 'react';
import './modal.css';

const Modal = ({ id = 'modal', onClose = () => {}, onYes = () => {}, children }) => {
   
const handleOutsideClick = (e) => {
  if(e.target.id === id) {onClose();}  
};
    
    return (
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="container-modal">
 
                <button className="close-modal" onClick={onClose}></button>  
        
                <div className="content-modal"> {children} </div>
            
                 <button className="btn-modal" onClick={onYes}>Sim</button>
        
                <button className="btn-modal" onClick={onClose}>Não</button>
        
            </div>  
        </div>
    )            
}

export default Modal;