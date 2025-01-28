import React, { useEffect, useState } from 'react';
import routes from './routes';
import { Routes, Route, useLocation , Navigate} from 'react-router-dom';


const AppRoute = ():JSX.Element =>{



    const [pageTile, setPageTitle] = useState("");
    const location = useLocation();
   


    useEffect(() => {
        

        // check the currentroute

        const currentRoute = routes.find(route => route.path === location.pathname);


        if(currentRoute && currentRoute.pageTile){
            document.title = currentRoute.pageTile;
        }
        
        
      }, [location.pathname]);

    return (
        <>



            <Routes>
                {routes.map(({ id, path, component: Component, auth }) => {
                    // const isAuthenticated = currentUser !== null;
                    
                    
                    // Render component if authentication is not required or user is authenticated
                    return <Route key={id} path={path} element={<Component />} />;
                })}
                </Routes>

        
        </>
    );
}

export default AppRoute;