import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/actions';

type HeaderProps = {
  page: string,
}

export const Header = ({ page }: HeaderProps) => {


  const dispatch = useDispatch();

  const changeHandler = (event: any) => {
    dispatch(setFilter(event.target.value));
  }
  return (
    <header className="d-flex ai-center jc-space-between">
      <h2>Youtube video list </h2>
      <form action="" >
        <select  name="tags" id="tags" onChange={changeHandler}>
          <option value="react">react</option>
          <option value="node">node</option>
          <option value="redux">redux</option>
        </select>
      </form>
      <ul className="nav-links">
        {page === '/add-video' ? <li><Link className="btn btn--blue" to="/">All videos</Link></li> : <li><Link className="btn btn--blue" to="/add-video">Add Video</Link></li>}
      </ul>
    </header>
  )
}
