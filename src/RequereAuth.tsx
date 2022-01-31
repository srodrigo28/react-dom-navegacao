 import { Navigate } from 'react-router-dom';

 type Props = {
    children: JSX.Element
}

export const RequereAuth = ( {children}: Props ) =>{
    const isAuth = true;

    if(isAuth){
        return children;
    } else {
        return <Navigate to="/login" />
    }
}