'use strict'

export async function getContatoPorNome(nome) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getContatos() {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
export async function postContato(contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    return response.ok

}

const contatoTest={
    "nome": "Gabriel Guedes",
    "celular": "11 9 9999-999",
    "foto": "guedes.png",
    "email": "guedes@guedes.dev.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "São Paulo"
}
/*
export async function putContato(contato, id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    return response.ok
}


const filmeTest={
    "nome":"10 coisas que eu odeio em você",
    "duracao":"02:20",
    "data_lancamento":"2000-10-05",
    "sinopse":"teste",
    "foto_capa":"https://foto.jpg",
    "link_trailer":"https://link.mp4"
}

async function deleteContatos(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)
    return response.ok
}
/*
async function getFilmes() {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function postFilmes(contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    return response.ok

}

async function putFilmes(contato, id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    return response.ok
}*/
