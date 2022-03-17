import React from 'react';

import { Link } from 'react-router-dom';

class Nav extends React.Component
{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
    <center>
    	
            <button><Link to="/register">Register</Link></button>
		<button><Link to="/login">Login</Link></button>
        </center>
	</div>

        )
    }
}

export default Nav;
