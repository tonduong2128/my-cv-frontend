import React, { useEffect, useRef, useState } from 'react';
import Avatar from '../avatar'
import SeparationLine from '../separationLine';
import Contact from '../contact'
import Description from '../description';
import './myCv.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { getDescriptionById } from '../../slice/apiDescriptionSlice';


function MyCv(props) {
    const description = useSelector(state => state.api?.description?.description || []);
    const dispatch = useDispatch();

    const [descriptionsRight, setDescriptionsRight] = useState([]);
    const [descriptionsLeft, setDescriptionsLeft] = useState([]);
    const [isActive, setIsActive] = useState(null);
    const pdf = useRef();

    useEffect(() => {
        dispatch(getDescriptionById(process.env.REACT_APP_USER_ID));
    }, [dispatch])
    useEffect(() => {
        setDescriptionsRight(() => description?.slice(0, 3) || []);
        setDescriptionsLeft(() => description?.slice(3) || []);
    }, [description])
    useEffect(() => {
        isActive?.classList?.toggle("icon-check");
    }, [isActive])

    const handleClickExportpdf = (e) => {
        const tag = pdf.current;
        isActive?.classList?.remove("icon-check");
        setIsActive(() => tag);
    }
    return (
        <div className='my-cv'>
            <ul className='list-icon'>
                <li ref={pdf} className='icon' onClick={handleClickExportpdf}>
                    <FontAwesomeIcon icon={faFilePdf} />
                </li>
            </ul>
            <div className='content-left'>
                <div className='container-avatar'>
                    <Avatar />
                </div>
                <div className='container-contact'>
                    <Contact />
                </div>
                {
                    descriptionsRight.map((descriptionRight, index) => {
                        return (
                            <React.Fragment key={index}>
                                <SeparationLine />
                                <div className='container-contact'>
                                    <Description
                                        title={descriptionRight.title}
                                        descriptions={descriptionRight.description} 
                                        isBold
                                    />
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
            <div className='content-right'>
                {
                    descriptionsLeft.map((descriptionLeft, index) => {
                        return (
                            <React.Fragment key={index}>
                                {index !== 0 && <SeparationLine />}
                                <div className='container-contact'>
                                    <Description title={descriptionLeft.title} descriptions={descriptionLeft.description} isBold />
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default MyCv;