import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Wrapper } from '../styles/styledTransition';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Timeline from '../pages/Timeline';
import UserPosts from '../pages/UserPosts';
import HashtagPage from '../pages/HashtagPage';
import MyLikes from '../pages/MyLikes';

export const AnimatedSwitch = withRouter(({ location }) => (
    <Wrapper>
        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames='fade'
                unmountOnExit
            >  
                <section className="route-section">
                    <Switch>
                        <Route path="/Signup" component={SignUp} />
                        <Route path="/Timeline" component={Timeline} />
                        <Route path="/User:id" component={UserPosts} />
                        <Route path="/HashtagPage:hashtag" component={HashtagPage} />
                        <Route path="/my-likes" component={MyLikes} />
                        <Route path="/" component={Login} />
                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>
    </Wrapper>
  ));