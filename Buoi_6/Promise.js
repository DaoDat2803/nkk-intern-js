const login = new Promise((resolve, reject) => {
    const userName = "admin";
    const password = "123456";
    
    if(userName === "admin" && password === "123456") {
        resolve("Login successful");
    } else {
        reject("Login failed");
    }
});

login
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });