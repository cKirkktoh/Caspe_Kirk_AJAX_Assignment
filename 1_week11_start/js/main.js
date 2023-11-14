(() => {

  const peopleCon = document.querySelector("#people-con");

  let spinner = `<svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
  <path fill="#333" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
  <animateTransform
  attributeName="transform"
  attributeType="XML"
  type="rotate"
  dur="1s"
  from="0 50 50"
  to="360 50 50"
  repeatCount="indefinite" />
  </path>
  </svg>`;

  function getData() {
    peopleCon.innerHTML = spinner;
    fetch("https://randomuser.me/api/?results=20")
    .then(response => response.json())
    .then(people => {
      console.log(people);

      let ul = document.createElement("ul");
      
      people.results.forEach(result => {
       
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = result.picture.thumbnail;

        var h3 = document.createElement("h3");
        h3.textContent = `${result.name.first} ${result.name.last}`;

        const p = document.createElement("p");
        p.textContent = result.email;


        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        ul.appendChild(li);
    });

     peopleCon.innerHTML = "";   
     peopleCon.appendChild(ul);   

    })
    .catch(error => console.error(error)); //catch and report any errors
  }

  getData();

})();