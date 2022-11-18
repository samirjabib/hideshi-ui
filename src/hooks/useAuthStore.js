import { data } from 'autoprefixer';
import { useDispatch, useSelector } from 'react-redux';
import { hideshiApi } from '../api';
import { onLogin, onLogout, onChecking, clearErrorMessage} from '../store';



const { status, user, errorMessage } = useSelector( state => state.auth);

const dispatch = useDispatch;


const startLogin = async( { email, password } ) => {
    dispatch(onChecking());
    try {
        const { data } = await hideshiApi.post('/auth', { email, password });
        localStorage.setItem( 'token', data.token );
        localStorage.setItem( 'token-init-date', new Date().getTime() );
        dispatch( onLogin( { name : data.name, uid : data.uid}) );

    } catch ( error ) {
        dispatch(onLogout('CREDENCIALES INCORRECTAS '));
        setTimeout( () => {
            dispatch( ( clearErrorMessage( ) ));

        }, 10);
    }
}

const startRegister = async( { email, password, name} ) => {
    dispatch(onChecking);

    try{
        const { data } = await hideshiApi.post('/auth/register', {email , password, name});
        localStorage.setItem('token', data.token);
        localStorage.setItem('token--init-date', new Date().getTime() );
        dispatch( onLogin( {name: data.name, uid: data.uid }));

    } catch (error){
        dispatch(onLogin(error.reponse.data?.msg || '--'));
        setTimeout( () => {
            dispatch( clearErrorMessage () );
        }, 10)

    }
}


const checkAuthToken = async () => {
    const token = localStorage.getItem('token');
    if(!token) return dispatch( onLogout() );

    try{
        const { data } = await calendarApi.get('auth/renew');
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
    } catch {
        localStorage.clear();
        dispatch( onLogout() );
    }

}



const startLogout = () => {
    localStorage.clear();
    dispatch( onLogoutCalendar() );
    dispatch( onLogout() );
}



return {

    // Propieties
    errorMessage,
    status,
    user,

    //Methods

    checkAuthToken,
    startLogin,
    startLogout,
    startRegister
    
}