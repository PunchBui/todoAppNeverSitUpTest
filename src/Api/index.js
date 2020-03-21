import * as call from '../Constants/url'
import axios from 'axios'

export const checkUser = (user,pass) => {
    return axios({
        "url": call.loginUrl,
        "method": "POST",
        "data": {
            "username" : user,
            "password" : pass
        }
    });
}

export const getAllTodo = (token) => {
    return axios({
        "url": call.getAllTodoUrl,
        "method": "GET",
        "headers": {
            "Authorization": token,
        }})
}

export const createTodo = (token,title,des) => {
    return axios({
        "url": call.createTodoUrl,
        "method": "POST",
        "headers": {
            "Authorization": token
        },
        "data": { "title": title, "description": des }
    })
}

export const updateTodo = (token,title,des,id) => {
    return axios({
        "url": call.updateTodoUrl + id,
        "method": "PUT",
        "headers": {
            "Authorization": token
        },
        "data": { "title": title, "description": des }
    })
}

export const deleteTodo = (token,id) => {
    return axios({
        "url": call.deleteTodoUrl + id,
        "method": "DELETE",
        "headers": {
            "Authorization": token
        },
    })
}