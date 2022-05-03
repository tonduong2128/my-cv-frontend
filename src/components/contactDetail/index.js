import React, { useState } from 'react';
import "./contactDetail.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactDetail(props) {
    const [content, setContent] = useState(props.content);
    const [type, setType] = useState(props.type);
    const [isEdit, setIsEdit] = useState(false);
    const handleDoubleClick = () => {
        setIsEdit((isEdit) => !isEdit);
    }
    const handleOnkeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Escape") {
            setIsEdit(() => false);
        }
    }
    return (
        <div
            className='contact-detail'
            onDoubleClick={handleDoubleClick}
        >
            <div className='contact-detail-icon'>
                <FontAwesomeIcon icon={type} />
            </div>
            {
                isEdit ?
                    <input
                        type={"text"}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className='contact-detail-content'
                        onKeyDown={handleOnkeyDown}
                    />
                    :
                    <React.Fragment>

                        <div className='contact-detail-content'>
                            {content}
                        </div>
                    </React.Fragment>
            }

        </div>
    );
}

export default ContactDetail;