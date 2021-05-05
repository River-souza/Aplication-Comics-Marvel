/* 
    Name do Projeto : Aplication Comics Marvel
    Created on : 01/05/2021.
    Change on : 01/05/2021.
    Author     : Michael Dydean
*/
import React, { Component } from "react";

class FooterHome extends Component {

render() {
        return (
             <React.Fragment style={{position: "fixed", bottom:3, background: "black"}}>
            <hr/>
               <div>
                 <p style={{color: "white", textAlign: "center"}}>Desafio Front-End | API da Marvel e Google Maps | 2021 by Michael Dydean</p>
               </div>
             </React.Fragment>
        );
    }
}

export default FooterHome;