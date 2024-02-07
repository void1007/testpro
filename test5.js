// $(function(){
//   $("#navi a").click(function(){
//     $("#main img").attr("src",$(this).attr("href"));
//     return false;
//   })
// })

// $(function(){
//   $("navi a").click(function(){
//     $("#main img").before("<img src=' ' +$(this)
//     .attr("href")" +" 'alt=">");
//     $("#main img:last").fadeOut("fast",function(){
//       $(this).remove();
//     });
//     return false;
//   });
// }); --> 실패


$("img.next").click(function(){
  $("#navi .pageWrap").animate({
    marginleft : parseInt($("#navi .pageWrap")
    .css("margin-left"))-300+"px"
  },"fast");
});

$("img.prev").click(function(){
  $("#navi .pageWrap").animate({
    marginleft : parseInt($("#navi .pageWrap")
    .css("margin-left"))+300+"px"
  },"fast")
});