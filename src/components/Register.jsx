import React from 'react';
import { useState, useEffect } from 'react';
import { register } from '../util/service';
import { Route} from 'react-router-dom';
import Login from './Login';
import Topicslist from './TopicsList';


const Register = ({setUser, history}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setPass] = useState('');
    const [isSamePass, setIsSamePass] = useState(false);

    useEffect(() => {
        setIsSamePass(confirmPass === password);
       
    }, [confirmPass, password]);

    function handleSubmit(){
        if(!password || !isSamePass) return;
        register({name, surname, username, email, password}).then(data=>{
            if(data.success){
                setUser(data.user);
                history.push('/topics');
            } else {
                console.log('Neuspešna registracija');
            }
        })
    }
    return (
        <div className="main">
        <form id='contact'>
                <input className="inp"type="text" placeholder="Ime" required onInput={e => {
                    setName(e.target.value)
                }} />
          
                <input className="inp"type="text" placeholder="Prezime" required onInput={e => {
                    setSurname(e.target.value)
                }} />
                <input className="inp"type="text" placeholder="Korisničko ime" required onInput={e => {
                    setUsername(e.target.value)
                }} />
                <input className="inp"type="email" placeholder="Email" required onInput={e => {
                    setEmail(e.target.value)
                }} />
                <input className="inp"type="password" placeholder="Šifra" required onInput={e => {
                    setPassword(e.target.value)
                }} />
                <input className="inp"type="password" placeholder="Potvrdi šifru" required onInput={e => {
                    setPass(e.target.value)
                }} />
             
                <input className="btn" type="submit" value="Registruj se" onClick={e => { e.preventDefault(); handleSubmit() }} />
           
        </form>
        <Route path='/' component={(props)=><Login setUser={setUser} {...props}/>} ></Route>
        <Topicslist/>

    </div>
    )
}
export default Register;