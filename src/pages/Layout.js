import { Outlet, Link} from 'react-router-dom';

const Layout = () => {
    return (
        <>
         <nav>
            <ul>
              <h1><li><Link to='/'>Home</Link></li></h1>
              <h2><li><Link to='/reports'>Reports</Link></li></h2>
              <h2><li><Link to='/entryform'>Entry_Form</Link></li></h2>
            </ul>
         </nav>
         <Outlet />
        </>
    );
};

export default Layout;