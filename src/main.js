import { SearchDocs } from './search.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import tvIcon from './images/oldTV.png';

let tvElement = document.getElementById("tvicon");
tvElement.src = tvIcon;

$(document).ready(function () {

  $("#submitButton").click(function (event) {
    event.preventDefault();
    $("#details").empty();
    $("#name").empty();


    let ailment = $('#ailment').val();
    let newSearch = new SearchDocs();
    let promise = newSearch.GetByAilment(ailment);

    promise.then(function (response) {
      let body = JSON.parse(response);
      console.log(body);
      for (let i = 0; i < body.data.length; i++) {
        let docMiddleName = body.data[i].profile.middle_name;
        if (docMiddleName===undefined){
          docMiddleName = '';
        } 
        $("#name").append(`<li id= ${body.data[i].npi}> ${body.data[i].profile.first_name} ${docMiddleName} ${body.data[i].profile.last_name}</li>`);
      }
      // $("li").click(function (event) {
      //   event.preventDefault();
      //   $("#details").empty();
      //   let id = this.getAttribute("id");

      //   let detailsPromise = newSearch.GetDetails(id);
      //   detailsPromise.then(function (response) {
      //     let body = JSON.parse(response);



      //     $("#details").append(`<img class='img-thumbnail' src='https://image.tmdb.org/t/p/original/${body.backdrop_path}' alt = 'pic'>`);
      //     $("#details").append(`<h4>${body.name}</h4>`);
      //     $("#details").append(`<p>Number of seasons: ${body.number_of_seasons}</p>`);
      //     $("#details").append(`<p>Number of episodes: ${body.number_of_episodes}</p>`);
      //     $("#details").append(`<p id='description'>Description: ${body.overview}</p>`);
      //     $("#details").append(`<p>Episode runtime: ${body.episode_run_time[0]}</p>`);
      //     $("#details").append(`<span>Stream on: ${body.networks[0].name}</span>`);

      //     $("#details").fadeIn();

      //   })

      // })
    })
  })
  // $("#randomButton").click(function (event) {
  //   event.preventDefault();
  //   $("#details").empty();
  //   $("#name").empty();

  //   let minutes = $('#minutes').val();
  //   let genre = $('select#genre').val();
  //   let newSearch = new SearchMovie(minutes, genre);
  //   $("#submitButton").off();

  //   let randomPromise = newSearch.GetRandom();

  //   randomPromise.then(function (response) {
  //     let body = JSON.parse(response);
  //     console.log(body.results.length);
  //     for (let i = 0; i < body.results.length; i++) {
  //       $("#name").append(`<li class= ${body.results[i].id}>${body.results[i].name}</li>`);
  //     }
  //     $("li").click(function (event) {
  //       $("#details").empty();

  //       let id = this.getAttribute("class");

  //       let detailsPromise = newSearch.GetDetails(id);
  //       detailsPromise.then(function (response) {
  //         let body = JSON.parse(response);


  //         $("#details").append(`<img class='img-thumbnail' src='https://image.tmdb.org/t/p/original/${body.backdrop_path}' alt = 'pic'>`);
  //         $("#details").append(`<h4>${body.name}</h4>`);
  //         $("#details").append(`<p>Number of seasons: ${body.number_of_seasons}</p>`);
  //         $("#details").append(`<p>Number of episodes: ${body.number_of_episodes}</p>`);
  //         $("#details").append(`<p id='description'>Description: ${body.overview}</p>`);
  //         $("#details").append(`<p>Episode runtime: ${body.episode_run_time[0]}</p>`);

  //         $("#details").fadeIn();
  //       })

  //     })
  //   })
  // })
})
