$(".head").hover(function() {
  removeWhiteText(".head");
  showDetails(".content > div", this);
});
$(".subheading").hover(function(){
  removeWhiteText(".subheading");
  showDetails(".details", this); 
});

function removeWhiteText(elClass) {
  $(elClass).each(function(){
    $(this).removeClass("white-text");
  })
}



function showDetails(str, el) {
  var selected = $(el)[0].id;
  var selectedContent = "#" + selected + "-content";
  var classArray = ["disappear"];
  $(el).addClass("white-text");
  
  $(selectedContent).removeClass("disappear");
  
  $(str).each(function() {
    for (var i in classArray){
      removeClasses(classArray[i], this);
    }      
  });
  function removeClasses(cl, obj){
      var s = selected + "-content";
      var thisID = obj.id;
      var hasClass = $(obj).hasClass(cl);
      if (thisID != s && hasClass === false) {
        $(obj).addClass(cl);
      }
    }
}
