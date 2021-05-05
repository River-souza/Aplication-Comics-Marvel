/* 
    Name do Projeto : Aplication Comics Marvel
    Created on : 30/04/2021.
    Change on : 03/05/2021.
    Author     : Michael Dydean
*/
import React from 'react';

const Button = ({url='', onClick, text}) => (
    <a href={url}
 className="return" onClick={onClick}>
        {text}
    </a>
);

export default Button;