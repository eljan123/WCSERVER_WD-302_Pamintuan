const apiUrl = 'http://localhost:3000/api/users';

// Fetch all users
function fetchUsers() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            userList.innerHTML = '';
            users.forEach(user => {
                userList.innerHTML += `<p>${user.id}: ${user.name}, ${user.email}, ${user.age}, ${user.salary}</p>`;
            });
        })
        .catch(error => console.error('Error fetching users:', error));
}

// Fetch a specific user by ID
function fetchUserById() {
    const userId = document.getElementById('userId').value;
    fetch(`${apiUrl}/${userId}`)
        .then(response => response.json())
        .then(user => {
            const userDetails = document.getElementById('user-details');
            userDetails.innerHTML = '';
            if (user.id) {
                userDetails.innerHTML = `<p>${user.id}: ${user.name}, ${user.email}, ${user.age}, ${user.salary}</p>`;
            } else {
                userDetails.innerHTML = `<p>User not found</p>`;
            }
        })
        .catch(error => console.error('Error fetching user by ID:', error));
}

// Add a new user
document.getElementById('addUserForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUser = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: parseInt(document.getElementById('age').value),
        salary: parseInt(document.getElementById('salary').value)
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(response => response.json())
        .then(user => {
            alert('User added successfully');
            document.getElementById('addUserForm').reset();
        })
        .catch(error => console.error('Error adding user:', error));
});

// Delete a user by ID
function deleteUser() {
    const userId = document.getElementById('deleteId').value;
    fetch(`http://localhost:3000/api/delete/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.text())
        .then(message => {
            alert(message);
        })
        .catch(error => console.error('Error deleting user:', error));
}
