const user = { id: 1, name: "Dat" };

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; // Change this to false to test rejection

        if (success) {
            resolve(user);
        } else {
            reject("Error fetching data");
        }
    }, 2000);
});

promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });