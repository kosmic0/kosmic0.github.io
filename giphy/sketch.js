var url1 = "http://api.giphy.com/v1/gifs/search?q=";
var url2 = "&api_key=dc6zaTOxFJmzC&limit=10";
var kos;
var input;



function setup() {
      
      var button = select('#submit');
      button.mousePressed(giphyquery);
      input = select('#giphy');
      
}


function giphyquery(){
  search = input.value();
  var url = url1 + search + url2 ;
  loadJSON(url, getdata);
  
}


function getdata(data){
removeElements();
p = document.getElementsByTagName("p");
//p.remove();

kos = data;
for(var i=0;i<kos.data.length;i++){

createImg(kos.data[i].images.original.url);
}
  
  
}




