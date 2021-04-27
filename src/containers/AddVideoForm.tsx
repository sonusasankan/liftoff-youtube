import React, { useState, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addVideo, updateVideo } from '../store/actions';

import { Form } from '../components/Form'

import { Video } from '../types/Video';

interface Props {
    /* other props for ChildComponent */
    close?: () => void;
    updatedVideo?: Video;
    formType: string;
}

export const AddVideoForm = ({close, formType, updatedVideo} : Props) =>{

    const store = useStore()
    let history = useHistory();

    const [video, setVideo] =  useState({
        id: new Date().getUTCMilliseconds(),
        url: '',
        title: '',
        description: '',
        isHidden: false,
        tags: ['']
    });
    const [errors, setErrors] = useState({
        url: false,
    });

    const dispatch = useDispatch();


    const onSubmit =(event: any)=>{
        event.preventDefault();
        if(!errors.url && video.title && video.description) {
            let newVideo = {...video, id: new Date().getUTCMilliseconds(),}
            if(formType === 'add') {
                dispatch(addVideo(newVideo));
            }else{
                dispatch(updateVideo(video));
                if (close) close();
            }
            history.push('/');
        }else{
            alert('Errors');
        }
    }

    const handleOnChange = (event: any)=>{

        if(event.target.name === 'url'){
            let regex = new RegExp('^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$');
            let valid =  regex.test(event.target.value);
            if(valid) {
                setVideo((prev: any)=>{
                    return {...prev, [event.target.name]: event.target.value}
                })
                setErrors((prev) =>{
                    return {...prev, url: false}
                }) 
            }else{
                setErrors((prev) =>{
                    return {...prev, url: true}
                })
            }
        }else{
            setVideo((prev: any)=>{
                return {...prev, [event.target.name]: event.target.name === 'isHidden'? event.target.value.toLowerCase() === 'true':event.target.value}
            }) 
        } 
    }

    const handleRadioChange = (event: any) => {
        setVideo((prev: any) => {
            return { ...prev, [event.target.name]: !video.isHidden}
        })
    }

    const selectedTags = (tags: string[]) => {
        setVideo((prev: any)=>{
            return {...prev, tags: tags}
        })
    }
    
    const removeTags = (index: number) => {
        let tags: string[] = video.tags.filter((tag) => video.tags.indexOf(tag) !== index)
        setVideo((prev: any)=>{
            return {...prev, tags: tags}
        })
    }

    const onKeyPress = (event: any) => {
        if (event.which === 13 /* Enter */) {
          event.preventDefault();
        }
    }


    useEffect(()=>{
        if(updatedVideo){
            let newState = store.getState().video.videos.filter((video: any) => video.id === updatedVideo.id);
            setVideo(newState[0]);
        }
    }, [updatedVideo, store])

    return (
        <div className="add-video-form">
            <Form  errors={errors} 
            video={video} 
            onKeyPress={onKeyPress}
            handleOnChange={handleOnChange}
            handleRadioChange={handleRadioChange}
            onSubmit={onSubmit}
            removeTags={removeTags}
            selectedTags={selectedTags}
            formType={formType}
            />
        </div>
    )
}

// export default withRouter(AddVideoForm);