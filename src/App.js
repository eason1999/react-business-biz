import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './common/header';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header></Header>
                    react-seller
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
