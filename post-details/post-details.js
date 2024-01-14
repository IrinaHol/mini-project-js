const post = JSON.parse(new URL(location.href).searchParams.get('post'));

const postTitle = document.getElementById('postTitle');
const postContent = document.getElementById('postContent');

postTitle.innerText = `Post -  ${post.id}`;
postContent.innerHTML = `UserId: ${post.userId}; <br> PostId: ${post.id}; <br> Title: ${post.title}; <br> Body: ${post.body};`;

const showComments = async () => {
    const json = await fetch(` https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    const comments = await json.json();

    const commentsTitle = document.getElementById('commentsTitle');
    const commentsContent = document.getElementById('commentsContent');
    commentsTitle.innerText = `Comments of post ${post.id}`;

    for (const comment of comments) {
        const commentDiv = document.createElement('p');
        commentDiv.innerHTML = `Name: ${comment.name}; <br> Body: ${comment.body};`
        commentsContent.appendChild(commentDiv);
    }
}

void showComments();