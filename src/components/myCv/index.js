import React, { useEffect, useState } from 'react';
import Avatar from '../avatar'
import SeparationLine from '../separationLine';
import Contact from '../contact'
import Description from '../description';
import './myCv.css'
import Api from '../../axios/Api.mjs';

function MyCv(props) {
    const [descriptionsRight, setDescriptionsRight] = useState([]);
    const [descriptionsLeft, setDescriptionsLeft] = useState([]);
    useEffect(() => {
        Api.getDescription(1)
            .then(result => {
                const data = result.data;
                setDescriptionsRight(() => data.slice(0, 3));
                setDescriptionsLeft(() => data.slice(3))
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div className='my-cv'>
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
                                    <Description title={descriptionRight.title} descriptions={descriptionRight.description} isBold />
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