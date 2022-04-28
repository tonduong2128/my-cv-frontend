import React, { useEffect, useState } from 'react';
import './description.css';

function Description(props) {
    const { title, descriptions } = props;
    const [dess, setDess] = useState([]);
    useEffect(() => {
        try {
            setDess(() => JSON.parse(descriptions));
        } catch (error) {
            console.error("Error");
        }
    }, [descriptions])
    return (
        <div className='description'>
            <div className='description-title'>{title}</div>
            <div className='description-content'>
                {
                    dess.map((des, index) => {
                        const { title, description } = des;
                        return (
                            <React.Fragment key={index}>
                                <div className={props.isBold ? 'content-item sub-title' : 'content-item '} >
                                    {title}
                                </div>
                                {
                                    description.map((desItem, index) => {
                                        return (
                                            <div className='content-item' key={index}>
                                                - {desItem}
                                            </div>
                                        )
                                    })
                                }
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Description;