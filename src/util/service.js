const url = 'https://coetus.herokuapp.com';
const api = '/api/forum';
const messages = '/message';
const user = '/users';
const topic = '/topics';

 function getMessage(id){
    return fetch(`${url}${api}${messages}/${id}`)
    .then(res=>res.json())
}

 function login(u){
    let res = fetch(`${url}${api}${user}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'POST',
        body:JSON.stringify(u)
    }).then(res => res.json())
    return res;
}

 function register(reg){
    let res = fetch(`${url}${api}${user}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'PUT',
        body:JSON.stringify(reg)
    }).then(res => res.json())
    return res;
}

function getTopics(){
    return fetch(`${url}${api}${topic}`)
    .then(res=>res.json());
}

export {getMessage, login, register, getTopics}