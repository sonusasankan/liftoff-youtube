import React, { useState, useEffect } from "react";
import { useStore, } from 'react-redux'
import { Video } from '../types/Video';

type Props = {
    video: Video;
    selectedTags: (event: any) => void;
    removeTags: (event: any) => void;
    formType?: string
};

export const TagsInput = (props: Props) => {

    const store = useStore()

    const [tags, setTags] = useState(new Array());
    const addTags = (event: any) => {
        if (event.key === "Enter" && event.target.value !== "") {
            let newArray = [...tags, event.target.value]
            if (tags.indexOf(event.target.value) === -1) {
                setTags(newArray);
                props.selectedTags([...tags, event.target.value]);
                event.target.value = "";
            }
        }
    };

    const removeTags = (index: number) => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
        props.removeTags(index);

    };

    useEffect(() => {
        if (props.formType === 'edit') {
            let newState = store.getState().video.videos.filter((video: any) => video.id === props.video.id)
            if(newState[0] !== undefined){
                setTags(newState[0].tags);
            }
        }
    }, [props.formType, props.video.id, store])

    return (
        <div className="tags-input">
            <input
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="Press enter to add tags"
            />
            <ul className="tags d-flex fw-wrap">
                {tags.map((tag, index) => (
                    <li key={index}>
                        <span>{tag}</span>
                        {tag ? <span className="close-icon" onClick={() => removeTags(index)}>X</span> : null}
                    </li>
                ))}
            </ul>
        </div>
    );
};
