import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import PostSub from './pages/postsub';
import Post from './pages/post';
import Search from './pages/search';

const Content = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/post/submit' component={PostSub}/>
            <Route path='/search' component={Search}/>
            <Route path='/post/:postId' component={Post}/>
        </Switch>
    )
}

export default Content