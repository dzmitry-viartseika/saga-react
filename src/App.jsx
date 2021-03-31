import React, { useState } from 'react';
import './assets/scss/style.scss';
import PostsForm from './components/Posts/PostsForm';
import Posts from "./components/Posts/Posts";
import FetchedPosts from "./components/Posts/FetchedPosts";

function App() {

  return (
    <div className="container pt-3">
        <div className="row">
            <div className="col">
                <PostsForm />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h2>Синхронные посты</h2>
                <Posts/>
            </div>
            <div className="col">
                <h2>Асинхронные посты</h2>
                <FetchedPosts/>
            </div>
        </div>
    </div>
  );
}

export default App;
