var searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
var contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';

var searchButton = document.getElementById("search-button");


searchButton.addEventListener("click", function(){
  document.getElementById("output").innerHTML = "";
  getWiki();
});

function getWiki() {
   var userInput = document.getElementById("searchTerm").value;
   var xhr = new XMLHttpRequest();
   var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=' + userInput;
   xhr.open("GET", url, true);
   xhr.send();
   xhr.onreadystatechange = function() {
     if (xhr.readyState === 4 && xhr.status === 200) {
       var data = JSON.parse(xhr.responseText);
       gotData(data);


     }

   }
 }



function gotData(data){
  for (i=0; i < data[1].length; i++)
  document.getElementById("output").innerHTML += ("<a href="+ data[3][i] + " target='_blank'><li><u><b>Title:</b></u> " + data[1][i] + "</li><li><u><b>Description:</b></u> " + data[2][i] + "</li><li>" + "</a>");
}
