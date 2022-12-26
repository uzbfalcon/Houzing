import React, { useId } from "react";
// import HomePage from '../pages/Home'
// import Properties from '../pages/Properties'
const Properties= React.lazy(()=> import('../pages/Properties')) 
const HomePage= React.lazy(()=> import('../pages/Home')) 


export const navbar = [
    { id: useId, 
        element:(<React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />{' '}
       </React.Suspense>) , 
        title: 'Home', 
        path: '/home', 
        private: false, 
        hidden: false ,
    },
    { id: useId, 
        element:(<React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
         <Properties />
        </React.Suspense>),
        title: 'Properties', 
        path: '/properties', 
        private: false, 
        hidden: false ,
    },
    { id: useId, 
        element: <h1>Generic Sign in</h1>, 
        title: 'Sign in', 
        path: '/signin', 
        private: false, 
        hidden: true, 
    },
    // { id: useId, 
    //     element: <h1>Generic Sign in</h1>, 
    //     title: 'Sign up', 
    //     path: '/signup', 
    //     private: false, 
    //     hidden: false, 
    // },

];

export default navbar