import PropertiesProvider from './Properties/index.jsx';


const RootContext = ({ children }) => {
    return <>
        <PropertiesProvider>{children}</PropertiesProvider>
    </>
}

export default RootContext