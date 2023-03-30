import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import metmatLogo from "./images/metmatlogo.enc";
// import bgmetMat from "./images/bgmetMat.jpeg";
import bgmetMat from "./images/bg2metmat.jpg";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='min-h-screen pb-20 h-fit bg-no-repeat bg-fixed bg-cover bg-blend-multiply bg-black bg-opacity-70' style={{backgroundImage:`url(${bgmetMat})`}}>
        <App />
    </div>
   
  </React.StrictMode>
);

