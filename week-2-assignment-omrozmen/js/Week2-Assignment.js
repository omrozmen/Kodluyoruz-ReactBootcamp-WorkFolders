url = "https://jsonplaceholder.typicode.com/comments";
//#region FetchWith GET 
//#region FetchWithGet Type1
function fetchWithGET(x) {
    return fetch(x)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            return response;
        });
}
console.log(fetchWithGET(url));
//#endregion
console.log("----")
//#region Type2
fetch(url)
    .then((result) => result.json())
    .then((result) => console.log(result))
//#endregion
//#endregion



//#region FetchWith Post
async function postData(url = url, data = {}) {
    return await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
    }
    );
};

postData(url, { deneme: 10 })
    .then((data) => {
        console.log(data);
    });
//#endregion