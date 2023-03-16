import React  from "react";
import useId from '../hooks/useId';
import Signin from '../pages/Signin'
import Favourite from '../pages/Favourite'

// import HomePage from '../pages/Home'
// import Properties from '../pages/Properties'
// 
const Properties= React.lazy(()=> import('../pages/Properties')) 
const HomePage= React.lazy(()=> import('../pages/Home')) 
const HouseItem= React.lazy(()=> import('../pages/HouseItem')) 


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
    }, { id: useId, 
        element:(<React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
         <HouseItem />
        </React.Suspense>),
        title: 'Single House', 
        path: '/properties/:id', 
        private: false, 
        hidden: true ,
    },
    { id: useId, 
        element: <Signin/>, 
        title: 'Sign in', 
        path: '/signin', 
        private: false, 
        hidden: true, 
    },
    ,
    { id: useId, 
        element: <Favourite/>, 
        title: 'Favourite', 
        path: '/Favourite', 
        private: true, 
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