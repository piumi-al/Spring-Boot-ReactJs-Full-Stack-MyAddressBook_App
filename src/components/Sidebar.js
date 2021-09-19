import React from 'react';

import {withRouter} from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => { 


        return (
          
            <div >
                <div className="sidebar">
                        <ul>
                            <li><a href="/add-user">Register</a></li>
                            <li><a href="/users">View All</a></li>
                        </ul>
                </div>
            </div>



   
        );  
}

export default withRouter(Sidebar);