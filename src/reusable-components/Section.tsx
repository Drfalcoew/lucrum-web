import React from 'react';
import './ReusableComponents.css';

const Section = (props: any) => {
    return (
        <div className='Section-container'>
            {props.children}
        </div>
    );
}

export default Section;