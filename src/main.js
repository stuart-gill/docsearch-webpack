import { SearchDocs } from './search.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import doctors from './images/doctors.png';

let docElement = document.getElementById("doctors");
docElement.src = doctors;

$(document).ready(function () {

  $("#ailmentButton").click(function (event) {
    event.preventDefault();
    $("#details").empty();
    $("#name").empty();
    let ailment = $('#ailment').val();
    $("#docName").val('');
    let newSearch = new SearchDocs();
    let promise = newSearch.GetByAilment(ailment);

    promise.then(function (response) {
      let body = JSON.parse(response);
      console.log(body);
      if (body.data.length===0){
        $("#name").append('No doctors match your criteria');
      }
      for (let i = 0; i < body.data.length; i++) {
        let docMiddleName = body.data[i].profile.middle_name;
        if (docMiddleName === undefined) {
          docMiddleName = '';
        }
        $("#name").append(`<li id= ${i}> ${body.data[i].profile.first_name} ${docMiddleName} ${body.data[i].profile.last_name}</li>`);
      }
      $("li").click(function (event) {
        event.preventDefault();
        $("#details").empty();
        let id = this.getAttribute("id");
        let acceptingNewPatients = "Not accepting new patients";
        let docMiddleName = body.data[id].profile.middle_name;
        if (body.data[id].practices[0].accepts_new_patients === true) {
          acceptingNewPatients = "Accepting new patients";
        }
        if (docMiddleName === undefined) {
          docMiddleName = '';
        }
        console.log(id);
        console.log(docMiddleName);
        $("#details").append(`<h4> ${body.data[id].profile.first_name} ${docMiddleName} ${body.data[id].profile.last_name}</h4>`);
        $("#details").append(`<img class='img-thumbnail' src='${body.data[id].profile.image_url}' alt = 'pic'>`);
        $("#details").append(`<p>Phone Number: ${body.data[id].practices[0].phones[0].number}</p>`);
        $("#details").append(`<p>Address: ${body.data[id].practices[0].visit_address.street} ${body.data[id].practices[0].visit_address.city}, ${body.data[id].practices[0].visit_address.state} ${body.data[id].practices[0].visit_address.zip}</p>`);
        $("#details").append(`<p>${acceptingNewPatients}</p>`);
        $("#details").fadeIn();
      });

      $("#docButton").click(function (event) {
        event.preventDefault();
        $("#details").empty();
        $("#name").empty();
        let docName = $('#docName').val();
        $("#ailment").val('');
        let newSearch = new SearchDocs();
        let promise = newSearch.GetByDocName(docName);
        promise.then(function (response) {
          let body = JSON.parse(response);
          console.log(body);
          if (body.data.length===0){
            $("#name").append('No doctors match your criteria, please try again!');
          }
          for (let i = 0; i < body.data.length; i++) {
            let docMiddleName = body.data[i].profile.middle_name;
            if (docMiddleName === undefined) {
              docMiddleName = '';
            }
            $("#name").append(`<li id= ${i}> ${body.data[i].profile.first_name} ${docMiddleName} ${body.data[i].profile.last_name}</li>`);
          }
          $("li").click(function (event) {
            event.preventDefault();
            $("#details").empty();
            let id = this.getAttribute("id");
            let acceptingNewPatients = "Not accepting new patients";
            let docMiddleName = body.data[id].profile.middle_name;
            if (body.data[id].practices[0].accepts_new_patients === true) {
              acceptingNewPatients = "Accepting new patients";
            }

            if (docMiddleName === undefined) {
              docMiddleName = '';
            }
            console.log(id);
            console.log(docMiddleName);
            $("#details").append(`<h4> ${body.data[id].profile.first_name} ${docMiddleName} ${body.data[id].profile.last_name}</h4>`);
            $("#details").append(`<img class='img-thumbnail' src='${body.data[id].profile.image_url}' alt = 'pic'>`);
            $("#details").append(`<p>Phone Number: ${body.data[id].practices[0].phones[0].number}</p>`);
            $("#details").append(`<p>Address: ${body.data[id].practices[0].visit_address.street} ${body.data[id].practices[0].visit_address.city}, ${body.data[id].practices[0].visit_address.state} ${body.data[id].practices[0].visit_address.zip}</p>`);
            $("#details").append(`<p>${acceptingNewPatients}</p>`);
            $("#details").fadeIn();
          });
        })
      })
    })
  })
})
