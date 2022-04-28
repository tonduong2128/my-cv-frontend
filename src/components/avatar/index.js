import React, { useEffect, useState } from 'react';
import "./avatar.css"
import src from '../../imgs/avatar.jpg'
import Api from '../../axios/Api.mjs';


function Avatar(props) {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDecription] = useState("");

    useEffect(() => {
        Api.getInfo(1)
            .then(result => {
                const data = result.data[0];
                setName(() => data.name);
                setUrl(() => data.img);
                setDecription(() => data.description);
            })
            .catch(error => {
                console.log(error);
            });
    }, [name, url])
    return (
        <div className='avatar'>
            <div className='avatar-name'>
                {name}
            </div>
            <div className='avatar-description'>
                {description}
            </div>
            <div className='avatar-container'>
                <img className='avatar-img' src={url} alt='My avatar' />
            </div>

        </div>
    );
}

export default Avatar;