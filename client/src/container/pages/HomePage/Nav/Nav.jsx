import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useNavigate} from 'react-router';

const NavHomePage = () => {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear();
        localStorage.removeItem("data")
        navigate('/')
    }
    
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //     <div className="container-fluid">
    //             <a className="navbar-brand" href="#">
    //                 <img src="./assets/img/logo.png" alt="logo" />
    //             </a>
    //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon" />
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //                 <Link>
    //                     <li className="nav-item">
    //                         <a className="nav-link active" aria-current="page" href="#">Adventure</a>
    //                     </li>
    //                 </Link>
    //                 <Link>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="#">Action</a>
    //                     </li>
    //                 </Link>
    //                 <Link>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href='#'>Strategy</a>
    //                     </li>
    //                 </Link>
    //                 <Link>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href='#'>Sport</a>
    //                     </li>
    //                 </Link>
    //             </ul>
    //             <div className="d-flex">
    //                 <button className="btn btn-light" type="submit">Log Out</button>
    //             </div>
    //             </div>
    //     </div>
    // </nav>

    <Navbar bg="primary" expand="lg">
  <Container>
    <Navbar.Brand href='#'>
        <img src="./assets/img/logo.png" alt="impostor logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to='/homepage/adventure'
            className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
            }
            style={isActive => ({
                color: isActive ? "#fff" : "#fff"
                })}
            >Adventure
        </NavLink>
        <NavLink to='/homepage/action'
            className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
            }
            style={isActive => ({
                color: isActive ? "#fff" : "#fff"
                })}
            >Action
        </NavLink>
        <NavLink to='/homepage/strategy'
            className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
            }
            style={isActive => ({
                color: isActive ? "#fff" : "#fff"
                })}
            >Strategy
        </NavLink>
        <NavLink to='/homepage/sport'
            className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
            }
            style={isActive => ({
                color: isActive ? "#fff" : "#fff"
                })}
            >Sport
        </NavLink>      
      </Nav>
      <Navbar.Collapse className='justify-content-end me-4'>
        <Navbar.Text>
            Signed in as: <NavLink to='/profile'
            className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
            }
            style={isActive => ({
                color: isActive ? "#fff" : "#fff"
                })}
            >{sessionStorage.getItem('username')}
        </NavLink>
            {/* <a href="#login">{sessionStorage.getItem('username')}</a> */}
        </Navbar.Text>
      </Navbar.Collapse>
      <Button href="" className="btn-register" onClick={logout}>Log Out</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default NavHomePage;
