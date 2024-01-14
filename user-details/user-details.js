const userID = new URL(location.href).searchParams.get('userID');
const getUserDetails = async () => {
    const usersById = await fetch(`http://jsonplaceholder.typicode.com/users/${userID}`);
    const user = await usersById.json();

    const title = document.getElementById('title');
    title.innerHTML = `USER - ${user.id}`

    const content = document.getElementById('content');
    function recursion(key) {
        for (const value in key) {
            if (typeof key[value] === 'object') {
                recursion(key[value])
            } else {
                const div = document.createElement('div');
                div.innerText = (`${value} : ${key[value]}`)
                content.appendChild(div);
            }
        }
    }

    recursion(user);

    const btn = document.getElementById('postBtn');

    btn.onclick = async () => {
        const json = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
        const posts = await json.json();

        for (const post of posts) {
            const postsTitle = document.getElementById('postsTitle');

            const postBox = document.createElement('div');

            const titlePosts = document.createElement('p');
            titlePosts.innerText = `${post.id}) ${post.title}`;

            const btnPost = document.createElement('button');
            btnPost.innerText = 'Post details!'

            postBox.append(titlePosts, btnPost);
            postsTitle.appendChild(postBox);

            btnPost.addEventListener('click', () => {
                location.href = `../post-details/post-details.html?post=${JSON.stringify(post)}`
            })
        }
        btn.disabled = true;
    }
}

void getUserDetails();