import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



///const element = <SayFullName name="Dima" surname="V" link="vk.com" />;
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('hello'));
//ReactDOM.render(<MeetAll />, document.getElementById('fullname'));

registerServiceWorker();
