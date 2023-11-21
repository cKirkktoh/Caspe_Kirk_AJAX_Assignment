(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  const marterialsCon = document.querySelector("#marterialsCon");
  const loading = document.querySelector("#loading");



  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/infoboxes"


  //functions
  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  function loadInfoBoxes() {
    function getData() {
    fetch("https://swiftpixel.com/earbud/api/infoboxes")
    .then(response => response.json())
    .then(info => {
      console.log(info);

      info.forEach((infoBox, index) => {
      let info = document.querySelector(`#hotspot-${index+1}`);
      
      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.heading;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.description;

       const imgElement = document.createElement('img');
       imgElement.src = `images/${infoBox.thumbnail}`; 

      info.appendChild(titleElement);
      info.appendChild(textElement);
      info.appendChild(imgElement);
    });
    
    })
    .catch(error => console.error(error)); //catch and report any errors
    
  }
    getData();
  }
  loadInfoBoxes();

  getData();
  function showLoadingIndicator() {
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'block';
  }
  
  function hideLoadingIndicator() {
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'none';
  }
  
})();

// loadMateraials
function loadMateraialsBox(){
  function getData() {
  fetch("https://swiftpixel.com/earbud/api/materials")
  .then(respone => respone.json())
  .then(materials => {
    console.log(materials);

    let ul = document.createElement("ul")

    materials.forEach((materialsBox)=> {
      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      h3.textContent = materialsBox.heading;
      const p = document.createElement("p");
      p.textContent = materialsBox.description;

      li.appendChild(h3);
      li.appendChild(p);
      ul.appendChild(li);

      marterialsCon.appendChild(ul);
    });
  })
     .catch(error => console.error(error)); //catch and report any errors

  }
  getData();
}
loadMateraialsBox();
