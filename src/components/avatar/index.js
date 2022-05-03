import React, { useEffect, useState } from 'react';
import "./avatar.css"
// import src from '../../imgs/avatar.jpg'
import TypeAnimation from 'react-type-animation'
import { useSelector, useDispatch } from 'react-redux'
import { getInfoById } from '../../slice/apiInfoSlice';

function Avatar(props) {
    const info = useSelector(state => state.api?.info?.info || state?.api);
    const [name, setName] = useState("");
    const [isEditName, setIsEditName] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setName(() => info.name);
    }, [info])
    useEffect(() => {
        dispatch(getInfoById(process.env.REACT_APP_USER_ID));
    }, [dispatch])

    const handleDoubleClickName = (e) => {
        setIsEditName((isEditName) => !isEditName);
    }
    const handleKeyDownName = (e) => {
        if (e.key === "Enter" || e.key === "Escape") {
            setIsEditName(() => false);
        }
    }

    return (
        <div className='avatar'>
            <div className='avatar-name'
                onDoubleClick={handleDoubleClickName}
            >
                {
                    isEditName ?
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={handleKeyDownName} /> :
                        <p>
                            {name}
                        </p>
                }
            </div>
            <div className='avatar-container'>
                <img className='avatar-img' src={info.img} alt='My avatar' />
            </div>
            <div className='avatar-description'>
                <TypeAnimation
                    cursor={true}
                    sequence={[
                        info.description,
                        3500,
                        info.title,
                        3000,
                    ]}
                    wrapper="div"
                    repeat={Infinity}
                />
            </div>
        </div>
    );
}
export default Avatar;