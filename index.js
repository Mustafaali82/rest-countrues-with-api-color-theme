/* ye function mene dark mode ke liye banaya hai */
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

/* Germany  */

function getDataGer() {
  url = "https://restcountries.com/v3.1/name/united";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data[0].name);

      let data1 = "";
      data.sort((values) => {
        data1 += `<div class="germany-box">
        <img class="germany-flag" src="design/download.png" alt="images">
        <h1 class="title">Germany</h1>
        <p>Population:<span>84,181,401</span></p>
        <p>Region:<span>Europe</span></p>
        <p>Capital:<span>Berlin</span></p>
        </div>`;
      });
      document.getElementById("germany").innerHTML = data1;
    })
    .catch((err) => {
      console.log(err);
    });
}

getDataGer();

/* Pakistan  */

function getDataPak() {
  url = "https://restcountries.com/v3.1/name/united";
  fetch (url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data[0].name);

      let data1 = "";
      data.sort((values) => {
        data1+=`<div class="pakistan-box">
        <img class="pakistan-flag" src="design/download.jpg" alt="images">
        <h1 class="title">Pakistan</h1>
        <p>Population:<span>227,223,691</span></p>
        <p>Region:<span>Islam</span></p>
        <p>Capital:<span>Islamabad</span></p>
        </div>`;
      });
      document.getElementById("pakistan").innerHTML = data1;
    })
    .catch((err) => {
      console.log(err);
    });
}

getDataPak();

/* afganistan  */

function getDataAfg() {
  url = "https://restcountries.com/v3.1/name/united";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data[0].name);

      let data1 = "";
      data.sort((values) => {
        data1 += `<div class="afganistan-box">
        <img  src="design/Flag-Afghanistan.jpg" alt="images">
        <h1 class="title">Afghanistan</h1>
        <p>Population:<span>40,224,465 </span></p>
        <p>Region:<span>Asia</span></p>
        <p>Capital:<span>Kabul</span></p>
        </div>`;
      });
      document.getElementById("afganistan").innerHTML = data1;
    })
    .catch((err) => {
      console.log(err);
    });
}

getDataAfg();


/* England  */

function getDataEng() {
  url = "https://restcountries.com/v3.1/name/united";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data[0].name);

      let data1 = "";
      data.sort((values) => {
        data1 += `<div class="england-box">
        <img src="design/Flag-England.jpg" alt="images">
        <h1 class="title">England</h1>
        <p>Population:<span>56.223M</span></p>
        <p>Region:<span>North-West</span></p>
        <p>Capital:<span>London</span></p>
        </div>`;  
      });
      document.getElementById("england").innerHTML = data1;
    })
    .catch((err) => {
      console.log(err);
    });
}

getDataEng();


/* India  */

function getDataInd() {
  url = "https://restcountries.com/v3.1/name/united";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data[0].name);

      let data1 = "";
      data.sort((values) => {
        data1 += `<div class="india-box">
        <img src="design/india.jpg" alt="images">
        <h1 class="title">India</h1>
        <p>Population:<span>1,400,087,391</span></p>
        <p>Region:<span>Central India.</span></p>
        <p>Capital:<span>New Delhi</span></p>
        </div>`;
      });
      document.getElementById("india").innerHTML = data1;
    })
    .catch((err) => {
      console.log(err);
    });
}

getDataInd();



/* South Africa  */

function getDataSou() {
  url = "https://restcountries.com/v3.1/name/united";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data[0].name);

      let data1 = "";
      data.sort((values) => {
        data1 += `<div class="southafrica-box">
        <img src="design/south.webp" alt="images">
        <h1 class="title">South Africa</h1>
        <p>Population:<span>60,417,326</span></p>
        <p>Region:<span>African </span></p>
        <p>Capital:<span>Cape Town</span></p>
        </div>`;
      });
      document.getElementById("south").innerHTML = data1;
    })
    .catch((err) => {
      console.log(err);
    });
}

getDataSou();


/* Newzeland  */

function getDataNew() {
  url = "https://restcountries.com/v3.1/name/united";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data[0].name);

      let data1 = "";
      data.sort((values) => {
        data1 += `<div class="newzealand-box">
        <img src="design/new.png" alt="images">
        <h1 class="title">New Zealand</h1>
        <p>Population:<span>4,880,109</span></p>
        <p>Region:<span>Australasia</span></p>
        <p>Capital:<span>Wellington</span></p>
        </div>`;
      });
      document.getElementById("newzealand").innerHTML = data1;
    })
    .catch((err) => {
      console.log(err);
    });
}

getDataNew();

/* Austrailla  */

function getDataAus() {
  url = "https://restcountries.com/v3.1/name/united";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data[0].name);

      let data1 = "";
      data.sort((values) => {
        data1 += `<div class="austrailla-box">
        <img src="design/aus.png" alt="images">
        <h1 class="title">Australia</h1>
        <p>Population:<span> 25,936,957</span></p>
        <p>Region:<span>Oceania</span></p>
        <p>Capital:<span>Canberra</span></p>
        </div>`;
      });
      document.getElementById("austrailla").innerHTML = data1;
    })
    .catch((err) => {
      console.log(err);
    });
}

getDataAus();