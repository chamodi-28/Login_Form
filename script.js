function registerUser(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword){
        alert("Passwords do not match");
        return false;
    }

    let users = JSON.parse(localStorage.getItem("users")) ||  [];

    users.push({username : username, password : password});

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");

    window.location.href="index.html";

    return false;
}

function loginUser(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user =>
                user.username === username && user.password === password            
    );

    if(validUser){
        localStorage.setItem("loggedInUser", username);

        alert("Login successful !");

        window.location.href="dashboard.html";

        return false;

    } else {
        alert("Invalid username or password !");
        return false;
    }
} 

function checkLogin(){
    let user=localStorage.getItem("loggedInUser");

    if(!user){
        window.location.href="index.html";
    }else{
        document.getElementById("welcomeUser").innerText="Hello," + user;
    }
}

function logout(){
    localStorage.removeItem("loggedInUser");

    alert("Logged out!");

    window.location.href="index.html";
}