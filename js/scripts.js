var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

let elist = document.querySelectorAll('input');

console.log("start");

elist.forEach(e => e.addEventListener('change', function() {
  if (!this.checked) return;
  let pos = getPosition(this);
  let etarget = document.querySelector('#div1');
  etarget.style.top = pos.y + "px";
  etarget.style.left = pos.x + "px";
  etarget.innerHTML = "Thanks!";
  if(this.name == "dmcs") etarget.innerHTML = "You are a fast reader!";
  if(this.name == "gdpr") etarget.innerHTML = "Great legal skills!";
  if(this.name == "newsletter") etarget.innerHTML = "Almost as fun as Css Tricks";
  etarget.style.opacity = 1;
  setTimeout(function() {
    // started with idea of class toggle, but easier to set style
    //  etarget.classList.toggle("start")
    etarget.style.transform = "scale(2.1) rotate( " + (Math.random()*20 - 10) + "deg)";
  },10);
  setTimeout(function() {
    etarget.style.transform = "scale(0.01)";
    etarget.style.opacity = 0.01;
  },1200);

  let numchecked = 0;
  elist.forEach(e=>numchecked += (e.checked ? 1 : 0));
  if (numchecked >= 5) document.querySelector("#gif1").style.display = "block";

}));



// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}
