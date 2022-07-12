let search = document.getElementById("search");
console.log(search);

let doSearch = document.getElementById("click-search-button");
console.log(doSearch);

async function getData(url) {
  const result = await axios.get(url);
  return result;
}
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
//
doSearch.onclick = async function () {
  const api_key = "?api_key=24661393e867b3b4a85f3f759a76a9d5";
  const baseUrl = "https://api.themoviedb.org/3/search/movie/";
  console.log(search.value);
  let url = baseUrl + api_key + "&query=" + search.value;
  console.log(url);
  const result2 = await getData(url);
  console.log(result2);
};

// for header movies section display on hover

const Id = document.getElementById("header-left-movies-id");

Id.onmouseover = () => {
  const Id2 = document.getElementById("movies-section-display");
  Id2.style.display = "flex";
  Id2.onmouseout = () => {
    Id2.style.display = "none";
  };
  Id.onmouseout = () => {
    Id2.style.display = "none";
  };
};

// Id.addEventListener("click", (e) => {
//   // // window.location = "anotherpage.html";
//   console.log(e.target);
// });
let popular = document.getElementById("popular");

popular.onclick = () => {
  window.location = "moviesPopular.html";
  // (async function () {
  //   let url =
  //     "https://api.themoviedb.org/3/trending/all/day?api_key=24661393e867b3b4a85f3f759a76a9d5";
  //   console.log(url);
  //   const result2 = await getData(url);
  //   console.log(result2.data.results);
  //   let baseUrl = "https://image.tmdb.org/t/p/w500/";
  //   for (let i = 0; i < result2.data.results.length; i++) {}
  // })();
};
