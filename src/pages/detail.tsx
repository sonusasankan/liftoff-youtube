import React from 'react';
import { useLocation } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { AddVideoForm } from '../containers/AddVideoForm';



export const DetailPage = () => {

    let state: any = useLocation().state;
    return (
        <div className="detail-page">
            <iframe style={{ width: '70%' }} title={state.title} width="800" height="520" src={state.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <h1 className="title">{state.title}</h1>
            <Popup trigger={<button className="btn">Edit</button>} modal nested>
                {(close: () => void) => (
                    <AddVideoForm formType="edit" close={close} updatedVideo={state} />
                )}
            </Popup>
        </div>
    )
}

