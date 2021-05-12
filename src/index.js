// todo
// const button = document.querySelector('#click-me');

// button.addEventListener('click', (event) => {
//   button.innerText = 'Please wait';
//   button.disabled = true;
// });

// CODE FOR OMDB

const results = document.querySelector('ul')

const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const movie = `<li class="list-inline-item">
          <img src="${result.Poster}" alt="">
          <p>${result.Title}</p>
        </li>`;
        results.insertAdjacentHTML("beforeend", movie);
      });
    });
};

const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('.title').value;
  results.innerHTML = '';
  searchMovies(input);
})


// CODE FOR MY-TEACHING-API.HEROKUAPP.COM
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


















