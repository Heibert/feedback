"use strict"
import Header from './feedback/Header';
import FeedBackItem from './feedback/FeedbackItem';
import { useState } from 'react';

const HeaderStyles = {
    backgroundColor: '#ed51a3',
    color: 'red'
}

function App() {
    return(
        <div className='container'>
            <Header 
              bgcolor="blue"
            />
            <FeedBackItem/>
            <FeedBackItem/>
            <FeedBackItem/>
            
        </div>
    )
}

export default App
