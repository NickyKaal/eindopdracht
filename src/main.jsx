import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './reset.css'
import './index.css'
import App from './App.jsx'

import {BrowserRouter as Router} from 'react-router-dom';
import {SubjectContextProvider} from "./context/SubjectContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <SubjectContextProvider>
                <App/>
            </SubjectContextProvider>
        </Router>
    </StrictMode>
)

