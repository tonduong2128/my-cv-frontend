import React from 'react';
import "./contactDetail.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactDetail(props) {
    return (
        <div className='contact-detail'>
            <div className='contact-detail-icon'>
                <FontAwesomeIcon icon={props.type} />
            </div>
            <div className='contact-detail-content'>
                {props.content}
            </div>
        </div>           
    );
}

export default ContactDetail;