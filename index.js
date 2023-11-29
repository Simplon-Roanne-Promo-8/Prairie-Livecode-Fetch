async function getUsers(){
    const response = await fetch('./users.json');
    const data = await response.json();
    console.log(data.users);
    data.users.forEach(user => {
        let userSection = document.querySelector('.users-cards');
        userSection.innerHTML += `
        <div id="user_${user.id}">
            <h2>${user.name}</h2>
            <ul >
                <li>${user.email}</li>
                <li>${user.age}</li>
                <li>${user.date_de_naissance}</li>
                <li>${user.telephone}</li>
            </ul>
        </div>
        `


    });

}