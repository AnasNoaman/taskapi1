 async function getUsers(){
    const users = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const userinf = await users.json();
    const result = userinf.map(function ( userinf ) {
        return `
        <div class="user">
            <h1>${userinf.name}</h1>
            <h3>${userinf.username}</h3>
            <div class="detials>
            <a>${userinf.email}</a>
            <a class="phone">${userinf.phone}</a>
            </div>
            <h4>${userinf.company.name}</h4>
        </div>
        `
    }).join('')

document.querySelector(".row").innerHTML = result ;
 }
 getUsers() ;