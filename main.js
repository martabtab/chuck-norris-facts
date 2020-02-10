function fetchNorrisJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  // const jokeId = 1;
  const url = `https://api.chucknorris.io/jokes/random/`;
  //${jokeId}
  axios
    .get(url)
    .then(response => response.data) // DIFFERENT FROM FETCH: response.data instead of response.json()
    .then(joke => {
      {
        console.log("data decoded from JSON:", joke);

        // Build a block of HTML
        const jokeHtml = `
        <p><strong>${joke.value}</strong></p>
        <img src="${joke.icon_url}" />
      `;
        document.querySelector("#chuck-norris").innerHTML = jokeHtml;
      }
    });
}

fetchNorrisJSON();
