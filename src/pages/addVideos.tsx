import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AddVideoForm } from '../containers/AddVideoForm';

interface Props extends RouteComponentProps<any> {
    /* other props for ChildComponent */
}

const AddVideos = () => {
    return (
        <div>
            <AddVideoForm  formType="add"/>
        </div>
    )
}

export default AddVideos;