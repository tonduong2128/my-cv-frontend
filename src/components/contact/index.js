import React, { useEffect, useState } from 'react';
import './contact.css';
import { faUser, faTablet, faCalendar, faEnvelope, faHome, faGlobe } from '@fortawesome/free-solid-svg-icons';
import ContactDetail from '../contactDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getContactById } from '../../slice/apiContactSlice';

function Contact(props) {
    const contact = useSelector((state) => state?.api?.contact?.contact);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContactById(process.env.REACT_APP_USER_ID));
    }, [dispatch]);
    return (
        <div className="contact">
            <div className="contact-title">Contact information</div>
            <div className="contact-details">
                {contact.map((con, index) => {
                    return <ContactDetail content={con} type={faCalendar} key={index} />;
                })}
                {/* <ContactDetail content="Nam" type={faUser} />
                <ContactDetail content="(024) 6680 5588" type={faTablet} />
                <ContactDetail content="hotro@topcv.vn" type={faEnvelope} />
                <ContactDetail content="1 Cau Giay, Ha Noi" type={faHome} />
                <ContactDetail content="https://fb.com/topcv.vn" type={faGlobe} /> */}
            </div>
        </div>
    );
}

export default Contact;
