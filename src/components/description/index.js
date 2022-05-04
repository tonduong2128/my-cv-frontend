import React, { useEffect, useState } from 'react';
import './description.css';

function parseDataSkill(str) {
    class Skill {
        constructor() {
            this.title = "";
            this.description = [];
        }
        setTitle(title) {
            this.title = title;
        }
        addDescription(item) {
            this.description.push(item);
        }
    }
    const result = [];
    var skill = new Skill();
    const arr = str.split("\n");
    arr.forEach((item, index, _this) => {
        item = item.trim();
        if (item[0] === "-") {
            skill.addDescription(item);
            if (index + 1 === _this.length) {
                result.push({ ...skill });
            }
        } else {
            if (index === 0) {
                skill.setTitle(item);
            } else if (index !== 0) {
                result.push({ ...skill });
                skill = new Skill();
                skill.setTitle(item);
            }
            if (index + 1 === _this.length) {
                result.push({ ...skill });
            }
        }
    })
    return result;
}
function Description(props) {
    const [title, setTitle] = useState(props?.title)
    const [descriptions, setDescriptions] = useState(props?.descriptions)
    const [desText, setdesText] = useState("");
    const [isEditDes, setIsEditDes] = useState(false);
    const [isEditTit, setIsEditTit] = useState(false);

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
        setdesText(() => e.target.value);
        setDescriptions(() => parseDataSkill(e.target.value));
    }
    useEffect(() => {
        var text = descriptions.reduce((pre, des) => {
            const { title, description } = des;
            pre += title + '\n';
            pre += description.reduce((_pre, _des) => {
                _pre += _des + '\n';
                return _pre;
            }, "")
            return pre;
        }, "")
        text = text.slice(0, -1);
        setdesText(() => text);
    }, [])
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
                        descriptions.map((des, index) => {
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