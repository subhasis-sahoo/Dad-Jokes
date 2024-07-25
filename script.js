const jokeBox = document.querySelector(".jokes-box");
const button = document.querySelector(".btn");
// const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
const apiUrl = "https://icanhazdadjoke.com/";


/*
const fetchData = () => {
    const response = fetch(apiUrl, {
        headers:{
            Accept: "application/json"
        }
    }).then((res) => {
        // console.log(res);
        return res.json();
    }).then((data) => {
        // console.log(data.joke);
        jokeBox.innerHTML = data.joke;
    }).catch((error) => {
        console.log(error);
        jokeBox.innerHTML = `Sorry! something is wrong.`;
    })
};
fetchData();
//*/

async function fetchData() {
    try{
        const res = await fetch(apiUrl, {
            headers: {
                Accept: "application/json"
            }
        });
        // console.log(res);
        const data = await res.json();
        console.log(data.joke);
        jokeBox.innerHTML = data.joke;
    } catch(error) {
        console.log(error);
        jokeBox.innerHTML = `Sorry! something is wrong.`;
    }
}

fetchData();
button.addEventListener("click", fetchData);