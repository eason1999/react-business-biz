import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './App.css';
import Header from './common/header';
import MainMenu from './common/menu';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header></Header>
                    <div className="contentWrap">
                        <MainMenu></MainMenu>
                        <div className="mainContent">
                            {renderRoutes(routes)}
                        </div>
                    </div>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
