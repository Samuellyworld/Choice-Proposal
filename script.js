
//nav toggle

document.getElementById('nav-toggle').onclick = function(){
  document.getElementById("nav-content").classList.toggle("hidden");
}

//for each proposal vote page

var eachModal = document.getElementById('eachSimpleModal');

var eachModalBtn = document.getElementById('eachModalBtn');

var eachCloseBtn = document.getElementById('eachCloseBtn');


eachModalBtn.addEventListener('click', eachOpenModal);

eachCloseBtn.addEventListener('click', eachCloseModal);

window.addEventListener('click', eachOutsideClick);


function eachOpenModal(){
  eachModal.style.display = 'block';
}

// Close modal
function eachCloseModal(){
  eachModal.style.display = 'none';
}

// Click outside and close
function eachOutsideClick(e){
  if(e.target == eachModal){
    eachModal.style.display = 'none';
  }
}