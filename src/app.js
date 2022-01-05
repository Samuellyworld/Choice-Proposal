
const homePage = document.getElementById('choice-div');
const proposalCreate = document.getElementById("proposal");
const footer = document.getElementById("footer");
const Footer = document.getElementById("ft");
const electionToggle = document.getElementById("election");
const proposals = document.getElementById("proposals")


//proposals page
const Proposals= () => {
  proposals.style.display = 'block'
  proposalCreate.hidden = true;
  homePage.hidden = true;
  footer.hidden = true;
  Footer.hidden = true;
}
//
// toggle hide page
const electionReset = () => {
    homePage.hidden = true;
    proposals.style.display = 'none'
    proposalCreate.hidden= false;
}

// vote page 
const votePage = () => {
    homePage.hidden= true;
    footer.hidden = true;
    Footer.hidden = true;
   
}

var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');


var closeBtn = document.getElementsByClassName('closeBtn')[0];


modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);


function openModal(){
  modal.style.display = 'block';
}

// Close modal
function closeModal(){
  modal.style.display = 'none';
}

// Click outside and close
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}

electionToggle.addEventListener("click", electionReset);
