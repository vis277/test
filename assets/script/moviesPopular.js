let content = document.getElementById("content");
console.log(content);

async function getData(url) {
  const result = await axios.get(url);
  return result;
}

let loadData = async function () {
  let url =
    "https://api.themoviedb.org/3/movie/popular?api_key=24661393e867b3b4a85f3f759a76a9d5";

  console.log(url);
  const result2 = await getData(url);

  let baseUrl = "https://image.tmdb.org/t/p/w500";
  for (let i = 0; i < result2.data.results.length; i++) {
    //   console.log(result2.data.results[i].backdrop_path);
    let finalUrl = baseUrl + result2.data.results[i].backdrop_path;
    //   console.log(finalUrl);
    let div = document.createElement("div");
    div.className = "card";
    // div.innerHTML = `<img src="${finalUrl}" />`;
    div.innerHTML = `<div class="card-container">
      <div class="image-conatiner">
      <div class="rating-container">
          <span> ${result2.data.results[i].vote_average}</span>
        </div>
        <img class="movie-image" src="${finalUrl}" alt="loading" />
        
      </div>
      <div class="name-conainer">
        <p>${result2.data.results[i].original_title} </p>
        <div class="bookmark" onclick="func(this,${result2.data.results[i].id})"> </div>
      </div>
    </div>`;
    content.appendChild(div);
  }
  console.log("LN39", result2.data.results);
  let arr = JSON.stringify(result2.data.results);
  // console.log(arr);
  localStorage.setItem("post", arr);
};

loadData();

function func(event, id) {
  event.classList.toggle("bookmarksave");
  console.log(id);
  let obj = {};
  let bookmark = localStorage.getItem("obj") || obj;
  console.log("LN52", bookmark);

  bookmark[id] = true;
  localStorage.setItem("bookmark", JSON.stringify(bookmark));
}
