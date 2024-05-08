const elList = document.querySelector('.list');

function change(evt) {
   let str = '';
   for (let item of evt) {
      str += `<button class="type" > ${item}  </button>`
   }


   return str;
}
function render() {
   for (let i = 0; i < films.length; i++) {
      elList.innerHTML += `
         <li class="item">
         <p class="item__text">
             ${"Film's id: " + films[i].id
         }
         </p>
           <p> ${"Release year: " + new Date(films[i].release_date * 1000).getFullYear()}</p>
         <img src="${films[i].poster}" alt="">
         <p class="title">
             ${films[i].title}
         </p>
       <p class="one">  ${"Genres: " + change(films[i].genres)}</p>
         <div class="buttun">
             <button class="btn">More</button>
             <button class="btn2">Save</button>
         </div>
     </li>

         `



   }
}
render()
const elSelect = document.querySelector('.js-select')

renderList(films);
elSelect.addEventListener('change', function () {
   const elSelectedMovies = [];
   // elSelectedMovies = []
   console.log(elSelect.value);
   films.forEach(function (el) {
      el.genres.forEach(function (e) {
         if (e === elSelect.value) {
            elSelectedMovies.push(el);
         }
      });
   });
   console.log(elSelectedMovies);
   renderList(elSelectedMovies);
});

const elModalBody = document.querySelector('.modal-body')
function modalChiqargich(id) {
   let film = films.find((el) => el.id == id)


   elModalBody.innerHTML = `
      <div class="itemmodal"> 
        <img src="${film.poster}" alt="" class="img-modal">
      <div class="box">
          <h1 class="title">${film.title}</h1>
          <p class="desc">${film.overview}</p>
      </div>  
       </div>
         `



}

function renderList(array) {
   elList.innerHTML = ''
   array.forEach((el) => {
      elList.innerHTML +=
         `         <li class="item">
   <p class="item__text">
       ${"Film's id: " + el.id
         }
   </p>
     <p> ${"Release year: " + new Date(el.release_date * 1000).getFullYear()}</p>
   <img src="${el.poster}" alt="">
   <p class="title">
       ${el.title}
   </p>
 <p class="one">  ${"Genres: " + change(el.genres)}</p>
 <div class="buttun">
 <button type="button" onclick = "modalChiqargich(${el.id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 More
</button>   
 <button class="btn2">Save</button>
   </div>

</li>`;
   });

   const elForm = document.querySelector('.js-form')
   const elSearch = document.querySelector('.search')


   elSearch.addEventListener('keydown', function () {
      const searchMovies = films.filter((el) =>
         el.title.toLowerCase().includes(elSearch.value.toLowerCase())
      );
      renderList(searchMovies);
   });

}
