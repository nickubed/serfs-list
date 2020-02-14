import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import newPost from './pages/newPost';
import Post from './pages/post';
import Search from './pages/search';

const Content = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/post/submit' component={newPost}/>
            <Route path='/listing/:category'>
                <Search/>
            </Route>
            <Route path='/listing/:category/:subCategory'>
                <Search/>
            </Route>
            <Route path='/post/:postId' component={Post}/>
        </Switch>
    )
}

export default Content