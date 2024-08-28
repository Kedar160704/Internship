const apiUrl = "https://reqres.in/api/users"; // Dummy API URL

// CREATE Operation
function createUser() {
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, job })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
}

// READ Operation
function getUser() {
    const userId = document.getElementById("userId").value;

    fetch(`${apiUrl}/${userId}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
}

// UPDATE Operation
function updateUser() {
    const userId = document.getElementById("userId").value;
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;

    fetch(`${apiUrl}/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, job })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
}

// DELETE Operation
function deleteUser() {
    const userId = document.getElementById("userId").value;

    fetch(`${apiUrl}/${userId}`, {
        method: "DELETE"
    })
    .then(response => {
        if (response.status === 204) {
            document.getElementById("output").innerText = `User with ID ${userId} has been deleted.`;
        } else {
            document.getElementById("output").innerText = `Failed to delete user with ID ${userId}.`;
        }
    })
    .catch(error => console.error('Error:', error));
}