import React from 'react';
import Nav from '../../components/Nav';
import './style.css';

const IndexPage = () => {
    return (
        <div className="index-page">
            <Nav />
            <main>
                <div class="content">
                    <h1>(free snacks)</h1>
                    <p>Conversations about food, identity and memory in Pittsburgh</p>
                </div>
            </main>
        </div> 
       );
}

export default IndexPage;