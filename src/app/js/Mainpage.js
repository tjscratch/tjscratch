import React from 'react';
import '../css/App.css';
import {Header} from './Header'
import {MainContent} from './Maincontent'

export class Mainpage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MainContent />
            </div>
        )
    }
  }
