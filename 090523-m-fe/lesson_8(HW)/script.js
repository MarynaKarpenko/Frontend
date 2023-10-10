async function getTodos (username){
    let urlUsers = `https://jsonplaceholder.typicode.com/users?username=${username}`
    let resUsers = await fetch(urlUsers)
    let dataUser = await resUsers.json()
    // let user = dataUser.find(elem => elem.username === username)
    
    let urlTodos = `https://jsonplaceholder.typicode.com/todos?userId=${dataUser[0].id}`
    let resTodos = await fetch(urlTodos)
    let dataTodos = await resTodos.json()

    // let result = dataTodos.filter(elem => elem.userId === user.id)
    console.log(dataTodos);
}

getTodos('Delphine') 