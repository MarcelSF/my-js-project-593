// todo
// const button = document.querySelector('#click-me');

// button.addEventListener('click', (event) => {
//   button.innerText = 'Please wait';
//   button.disabled = true;
// });


const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('.title').value
  fetch(`http://www.omdbapi.com/?s=${input}&apikey=adf1f2d7`)
    .then(response => response.json()) // Parsing the response into a JSON
    .then((data) => {
      const results = document.querySelector('#results');
      results.innerHTML = ''
      data.Search.forEach((result) => {
        // Here we BUILD the HTML element
        const movieTag = `<li class="list-inline-item">
          <img src="${result.Poster}" alt="">
          <p>${result.Title}</p>
        </li>`;
        // We insert the HTML element we just built into the results list
        results.insertAdjacentHTML("beforeend", movieTag);
      })
    });
})

const sendSaying = (event) => {
  event.preventDefault;
  const author = document.querySelector('#author').value;
  const phrase = document.querySelector('#phrase').value;
  const saying = { "saying": { "author": author, "phrase": phrase } };
  fetch("https://my-teaching-api.herokuapp.com/api/v1/sayings?", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(saying)
  })
    // .then(response => response.json())
    // .then((data) => {
    //   console.log(data);
    // });
}

const sayingsForm = document.querySelector('.sayings-form');
sayingsForm.addEventListener('submit', sendSaying);


















