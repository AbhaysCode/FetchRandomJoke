const config = {headers: {
    'Accept': 'application/json'
    }}

const getJoke = async() =>{
    const res = await axios.get("https://icanhazdadjoke.com/slack",config)
    console.log("Value of Html is",`${document.getElementById("jokes").innerHTML}`);
    console.log("Value of joke is",`<li>${res.data.attachments[0].fallback}</li>`);
    document.getElementById("jokes").innerHTML=`${document.getElementById("jokes").innerHTML}`+`<li>${res.data.attachments[0].fallback}</li>`
}
document.addEventListener("keypress", function(event) {
    if (event.key == 13) {
        getJoke();
    }
  });