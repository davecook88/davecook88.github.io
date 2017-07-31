$("#headings > div").hover(showDetails);

function showDetails() {
  var selected = $(this)[0].id;
  var selectedContent = "#" + selected +"-content";
  
  $(selectedContent).removeClass("disappear");
  $(".content > div").each(function(){
    var s = selected + "-content";
    var thisID = this.id;
    var hasDisappear = $(this).hasClass("disappear")
    if(thisID != s && hasDisappear === false){
      $(this).addClass("disappear");
    }
  })
}
