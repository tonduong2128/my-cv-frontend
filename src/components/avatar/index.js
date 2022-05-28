import React, { useEffect, useState } from 'react';
import './avatar.css';
import src from '../../imgs/avatar.jpg';
import TypeAnimation from 'react-type-animation';
import { useSelector, useDispatch } from 'react-redux';
import { getInfoById } from '../../slice/apiInfoSlice';

function Avatar(props) {
    const info = useSelector((state) => state.api?.info?.info || state?.api);

    const [name, setName] = useState('~');
    const [dess, setDess] = useState([]);
    const [isEditName, setIsEditName] = useState(false);
    const [isEditDes, setIsEditDes] = useState(false);
    const [isLoadImg, setIsLoadImg] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoById(process.env.REACT_APP_USER_ID));
    }, [dispatch]);

    useEffect(() => {
        setName(info.name);
        setDess(info.description);
    }, [info]);

    const handleDoubleClickName = (e) => {
        setIsEditName((isEditName) => !isEditName);
    };

    const handleDoubleClickDes = (e) => {
        setIsEditDes((isEditDes) => !isEditDes);
    };

    const handleKeyDownName = (e) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            setIsEditName(false);
            setIsEditDes(false);
        }
    };
    const convertToDataDess = (data) => {
        try {
            data = data.join(',3000');
            data = data + ',3000';
            data = data.split(',');
            data = data.map((item) => {
                return Number.isNaN(Number.parseInt(item)) ? item : Number.parseInt(item);
            });
            return data;
        } catch (error) {
            return ['', 2000];
        }
    };
    const handleDessOnchange = (e) => {
        const dataDes = e.target.value?.split('|');
        setDess(dataDes);
    };
    return (
        <div className="avatar">
            <div className="avatar-name" onDoubleClick={handleDoubleClickName}>
                {isEditName ? (
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={handleKeyDownName}
                    />
                ) : (
                    <p>{name}</p>
                )}
            </div>
            <div className="avatar-container">
                <img
                    className={isLoadImg ? 'hiden' : 'avatar-img'}
                    onLoad={() => setIsLoadImg(false)}
                    src={info.img}
                    alt="My avatar"
                />
                <img className={isLoadImg ? 'avatar-img' : 'hiden'} src={src} alt="My avatar" />
            </div>
            <div className="avatar-description" onDoubleClick={handleDoubleClickDes}>
                {isEditDes ? (
                    <input
                        type={'text'}
                        onChange={handleDessOnchange}
                        value={dess}
                        onKeyDown={handleKeyDownName}
                        style={{ width: '100%' }}
                    />
                ) : (
                    <TypeAnimation cursor={true} sequence={convertToDataDess(dess)} wrapper="div" repeat={Infinity} />
                )}
            </div>
        </div>
    );
}
export default Avatar;
