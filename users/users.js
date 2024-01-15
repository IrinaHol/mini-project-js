const url = new URL('https://jsonplaceholder.typicode.com/users');
const getUser = async () => {
    const json = await fetch(url);
    const users = await json.json();

    const container = document.getElementById('container');

    for (const user of users) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.innerHTML = `${user.id}) ${user.name}`;
        container.appendChild(block);

        const btn = document.createElement('button');
        btn.innerText = 'User details';

        block.appendChild(btn);
        btn.classList.add('btn');

        btn.addEventListener('click', () => {
            location.href = `../user-details/user-details.html?userID=${user.id}`
        });
    }
}

void getUser();

