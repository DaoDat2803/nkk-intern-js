function getUser(callback) {
    setTimeout(() => {
        callback(null, { id: 1, name: "Dat" });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        callback(null, [
            { id: 101, title: "JavaScript Basics", userId },
            { id: 102, title: "Learn ReactJS", userId }
        ]);
    }, 1000);
}

function getComments(postId, callback) {
    setTimeout(() => {
        callback(null, [
            { id: 1001, content: "Great article!", postId },
            { id: 1002, content: "Very helpful!", postId }
        ]);
    }, 1000);
}

getUser((err, user) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("User:", user);

    getPosts(user.id, (err, posts) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log("Posts:", posts);

        getComments(posts[0].id, (err, comments) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log("Comments for Post", posts[0].id + ":",comments);
        });
    });
});