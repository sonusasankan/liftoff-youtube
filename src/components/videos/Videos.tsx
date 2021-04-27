import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import Popup from 'reactjs-popup';
import { AddVideoForm } from '../../containers/AddVideoForm';

//Actions
import { hideVideo, showVideo } from '../../store/actions';

export const Videos = () => {
  const [ isHidden, setIsHidden ] = useState(true);
  const video = useSelector((state: RootState) => state.video);
  const videos = video?.videos.filter(video => video.isHidden !== isHidden);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="nav d-flex">
        <button className={ isHidden ? 'btn  nav-link active': 'btn nav-link'} onClick={()=> setIsHidden(true)}>All videos</button>
        <button className={ !isHidden ? 'btn  nav-link active': 'btn nav-link'} onClick={()=> setIsHidden(false)}>Hidden videos</button>
      </nav>
      <div className="all-videos d-flex fw-wrap">
        {videos?.length === 0 ?  <h1>There are no videos</h1>:
          videos?.map(video => {
            return (
              <div className="video">
                <iframe title={video.title} width="300" height="220" src={video.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                <h2>{video.title}</h2>
                  <ul className="tags d-flex">
                    {video.tags.map((tag: string, index: any) => {
                      return (
                        <li>{tag}</li>
                      )
                    })}
                  </ul>
                <div className="video-actions d-flex jc-space-between">
                  <div className="left d-flex">
                    {video.isHidden? <button className="btn video-toggle" onClick={()=> dispatch(showVideo(video))}>Show Video</button> : <button className="btn video-toggle" onClick={()=> dispatch(hideVideo(video))}>Hide Video</button> }
                    <Popup trigger={<button className="btn">Edit</button>} modal nested>
                      {(close: () => void) => (
                         <AddVideoForm formType="edit" close={close}  updatedVideo={video} />
                      )}
                    </Popup>
                  </div>
                  <div className="right">
                    <Link className="btn btn--blue"
                     to={{
                      pathname: "/detail",
                      state: video.id
                    }}
                     >Go to details</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
