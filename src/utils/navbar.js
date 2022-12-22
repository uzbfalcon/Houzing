import { useId } from "react";
import HomePage from '../pages/Home'
import Properties from '../pages/Properties'


export const navbar = [
    { id: useId, 
        element: <HomePage />, 
        title: 'Home', 
        path: '/home', 
        private: false, 
        hidden: false ,
    },
    { id: useId, 
        element: <Properties />, 
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
    // }

];

export default navbar