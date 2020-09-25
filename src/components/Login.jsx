import React from 'react';
import { useState } from 'react';
import { login } from '../util/service';
import { withRouter } from 'react-router-dom'

const Login = ({ setUser, history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function handleSubmit() {
        login({ username, password })
            .then(data => {
                  if (data.success) {
                    setUser(data.user);
                    history.push('/topics');
                } else {
                    console.log('Nije ulogovan');
                }
            })
    }
    return (
        <form>
            <input className="inp" type="username" placeholder="Username" required onInput={e => {
                setUsername(e.target.value)
            }} />
            <input className="inp" type="password" placeholder="Šifra" required onInput={e => {
                setPassword(e.target.value)
            }} />
            <input className="btn" type="submit" value="Uloguj se" onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} />
        </form>
    )
}
export default withRouter(Login)