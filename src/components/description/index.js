import React, { useEffect, useState } from 'react';
import './description.css';

function Description(props) {
    const [title, setTitle] = useState(props?.title)
    const [descriptions, setDescriptions] = useState(props?.descriptions)
    const [dess, setDess] = useState([]);
    const [desText, setdesText] = useState("");
    const [isEditDes, setIsEditDes] = useState(false);
    const [isEditTit, setIsEditTit] = useState(false);

    useEffect(() => {
        setDess(() => descriptions);
    }, [])
    const handleDoubleClickTitle = (e) => {
        setIsEditTit(() => !isEditTit);
    }
    const handleDoubleClickDesc = (e) => {
        setIsEditDes(() => !isEditDes);
    }
    const handleKeDown = (e) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            setIsEditDes(() => false);
            setIsEditTit(() => false);
        }
    }
    const handleDescriptionOnchage = (e) => {
        const des = e.target.value;
        console.log(des);
    }
    useEffect(() => {
        const text = dess.reduce((pre, des) => {
            const { title, description } = des;
            pre += title + '\n';
            pre += description.reduce((_pre, _des) => {
                _pre += _des + '\n';
                return _pre;
            }, "")
            return pre;
        }, "")
        setdesText(() => text);
    }, [dess])
    return (
        <div className='description'>
            <div
                className='container-title'
                onDoubleClick={handleDoubleClickTitle}
            >
                {
                    isEditTit ?
                        <textarea
                            value={title}
                            onChange={(e) => setTitle(() => e.target.value)}
                            type="text"
                            className='description-title'
                            onKeyDown={handleKeDown}
                        /> :
                        <div className='description-title'>{title}</div>
                }
            </div>
            <div className='description-content'
                onDoubleClick={handleDoubleClickDesc}
            >
                {
                    isEditDes ?
                        <textarea
                            type="text"
                            value={desText}
                            className={props.isBold ? 'content-item sub-title' : 'content-item '}
                            onChange={handleDescriptionOnchage}
                            onKeyDown={handleKeDown}
                        /> :
                        dess.map((des, index) => {
                            const { title, description } = des;
                            return (
                                <React.Fragment key={index}>
                                    <div
                                        className={props.isBold ? 'content-item sub-title' : 'content-item '}
                                    >
                                        {title}
                                    </div>
                                    {
                                        description.map((desItem, index) => {
                                            return (
                                                <div
                                                    className='content-item'
                                                    key={index}
                                                >
                                                    {desItem}
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