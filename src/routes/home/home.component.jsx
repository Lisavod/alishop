
import {Outlet} from 'react-router-dom' //to locate where to render internal component for routing
import React from 'react';
import Directory from '../../components/directory/directory.component';



const Home = () => {

    

    return (
        <div>
            <Outlet />
            <Directory/>
        </div>
        
    ) 
}

export default Home;