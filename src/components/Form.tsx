import React from 'react';
import { TagsInput } from '../containers/TagsInput'
import { Video } from '../types/Video';

type Errors = {
    url: boolean;
}
type Props = {
    video: Video;
    errors: Errors;
    onSubmit: (event: any) => void;
    onKeyPress: (event: any) => void;
    handleOnChange: (event: any) => void;
    handleRadioChange: (event: any) => void;
    removeTags: (index: number) => void;
    selectedTags: (tags: string[]) => void;
    formType: string;
};

export const Form = ({ video, errors, formType, onSubmit, onKeyPress, handleOnChange, handleRadioChange, removeTags, selectedTags }: Props) => {
    return (
        <form onSubmit={onSubmit} onKeyPress={onKeyPress}>
            <div className="form-control">
                <input className={errors.url ? 'invalid' : 'valid'} type="text" name="url" placeholder="Enter the video url" value={video.url} onChange={handleOnChange} />
            </div>
            <div className="form-control">
                <input type="text" name="title" placeholder="Enter title" value={video.title} onChange={handleOnChange} />
            </div>
            <div className="form-control">
                <textarea name="description" placeholder="Type your message" value={video.description} onChange={handleOnChange} />
            </div>
            <div className="form-control">
                <TagsInput formType={formType} video={video} removeTags={removeTags} selectedTags={selectedTags} />
            </div>
            <div className="form-control">
                <input type="radio" id="show" name="isHidden" value={video.isHidden === false ? 'true' : 'false'} checked={!video.isHidden} onChange={handleRadioChange} />
                <label htmlFor="show">Show</label><br />
                <input type="radio" id="hide" name="isHidden" value={video.isHidden === true ? 'true' : 'false'} checked={video.isHidden} onChange={handleRadioChange} />
                <label htmlFor="hide">Hide</label><br />
            </div>
            <button className="btn" type="submit">Submit</button>
        </form>
    )
}
