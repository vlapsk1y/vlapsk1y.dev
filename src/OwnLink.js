import React from 'react';
import './OwnLink.css'

export function OwnLink({name, url}) {
    return (
      <a className="OwnLink" href={url}>
        {name}
      </a>  
    );
}