
let cl = console.log;

let apiUrl = 'http://localhost:3000/posts';

const postsInfoDiv = document.getElementById("postsInfo");

// fetch(apiUrl, {
//     method : "GET"
// })

// fetch returns promise

function fetchData(url, methodName, obj){
    return fetch(url,{
        method : methodName,
        body :obj,
    })
            .then(res => res.json())  // res.json() also returns promise
            .catch(cl)
}

fetchData(apiUrl, 'GET') // here this method returns promise
                        .then(data => templating(data))
                        .catch(cl)

// fetchData returns promise



function templating(arr){
    let result = "";
    arr.forEach(element => {
        result += `
        <div class="card">
        <div class="card-body">
            <h3>
                ${element.title}
            </h3>
            <p>
                ${element.body}
            </p>
        </div>
    </div>
                  `
    });
    postsInfoDiv.innerHTML = result;
}