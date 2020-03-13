import React, ***REMOVED*** Component } from 'react';
import ***REMOVED*** Link } from 'react-router-dom';

export default class Navbar extends Component ***REMOVED***

  render() ***REMOVED***
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Dashboard</Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/user" className="nav-link">Profile</Link>
                </li>
            </ul>
        </div>
      </nav>
    );
  }
}