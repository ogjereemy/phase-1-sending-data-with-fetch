// Add your code here
let details = {
    name: "Steve",
    email: "steve@steve.com",
}
function submitData() {
   return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(details)

    })
    .then(response => response.json())
    .then(result => {
        let newId = result.id;
        let idElement = document.createElement("p");
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);
        })
    .catch(error => {
        let errorMessage = error.message;
        let errorElement = document.createElement("p");
        errorElement.textContent = `Error Message: ${errorMessage}`;
        document.body.appendChild(errorElement);
    });
    // .then((details) => details.forEach(() => ()))
    // // .then(details => submitData(details))
    // .catch(error => console.log(error))
}
submitData(data)


