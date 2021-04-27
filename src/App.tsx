import React from 'react';
import './App.scss';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import { Layout } from './components/layout/Layout';
import AddVideos from './pages/addVideos';
import { Videos } from './components/videos/Videos';
import { DetailPage } from './pages/detail';

function App() {

  let location = useLocation();

  return (
      <Layout page={location.pathname}>
        <section className="videos">
            <Switch>
              <Route exact path="/add-video">
                <AddVideos />
              </Route>
              <Route exact path="/">
                <Videos/>
              </Route>
              <Route path="/detail">
                <DetailPage />
              </Route>
            </Switch>
        </section>
      </Layout>
  );
}

export default App;
