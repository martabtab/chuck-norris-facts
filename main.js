function fetchNorrisJSON() {
  const url = `https://api.chucknorris.io/jokes/random/`;
  axios
    .get(url)
    .then(response => response.data)
    .then(joke => {
      {
        console.log("data decoded from JSON:", joke);

        const jokeHtml = `
        <p><strong>${joke.value}</strong></p>
        <img src="${joke.icon_url}" />
      `;
        document.querySelector("#chuck-norris").innerHTML = jokeHtml;
      }
    });
}

fetchNorrisJSON();
