
var apiKey = process.env.exports.apiKey;
export class SearchDocs {

  
  GetByDocName(name) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.512%2C-122.658%2C100&user_location=45.512%2C-122.658&sort=distance-asc&skip=0&limit=15&user_key=${apiKey}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
          alert('There was an error with the API request, please try again');
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }


  GetByAilment(ailment) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${ailment}&location=45.512%2C-122.658%2C100&user_location=45.512%2C-122.658&sort=distance-asc&skip=0&limit=15&user_key=${apiKey}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
          alert('There was an error with the API request, please try again');
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}



