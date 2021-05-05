/* 
    Name do Projeto : Aplication Comics Marvel
    Created on : 26/04/2021.
    Change on : 04/05/2021.
    Author     : Michael Dydean
*/
import React from 'react';

const ComicThumbnail = ({ id='', url='', title='', thumbnail='', description='', writer='', penciller='', published='' }) => (
  <React.Fragment>
        <div id={id} className="thumbnail wrapper" onClick={(e) => {
      
           alert('\nTitle : ' + title + '\n\nDescription' + description + '\n\nWriter : ' + writer + '\n\nPenciller : ' + penciller + '\n\nPublished : ' + published);
             }}>
            <img className="thumbnail-img" src={thumbnail} alt={thumbnail}/>
            <div className="thumbnail-overlay"><span className="thumbnail-text">{title}</span>
            </div>
        </div>
    
    </React.Fragment>
);

export default ComicThumbnail;
