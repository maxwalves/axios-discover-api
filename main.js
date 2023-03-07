const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = response.data = JSON.stringify(response.data);
    })
    .catch(error => console.log(error))
}

function addNewUser(newUser)
{
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}

function getUser(id)
{
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data;
        userName.textContent = data.name;
        userCity.textContent = data.city;
        userID.textContent = data.id;
        userAvatar.src = data.avatar;
    })
    .catch(error => console.log(error))
}

function updateUser(id, userUpdated)
{
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => {
        response => console.log(response)
    })
    .catch(error => console.log(error))
}

function deleteUser(id)
{
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

const newUser = {
    name: "Max",
    avatar: "http://picsum.photos/200/300",
    city: "Curitiba"
}

const userUpdated = {
    name: "Carla",
    avatar: "http://picsum.photos/200/300",
    city: "Curitiba"
}

deleteUser(4)
//updateUser(3, userUpdated)
getUser(1)
getUsers()
//addNewUser(newUser)
