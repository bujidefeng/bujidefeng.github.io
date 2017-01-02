
  $(function(){
  var playlist = [
    {
      title:"Kiss Me",
      artist:"全素妍",
      mp3:"music/全素妍 - Kiss Me.mp3",
      poster: "images/全素妍 - Kiss Me.jpg"
    },{
      title:"笔记",
      artist:"周笔畅",
      mp3:"music/周笔畅 - 笔记.mp3",
      poster: "images/笔记.jpg"
    },{
      title:"那些花儿",
	  artist:"朴树",
      mp3: "music/朴树 - 那些花儿 (吉他版).mp3",
      poster: "images/那些花儿.jpg"
    }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor:".music-player"
  };
  
  var options = {
	ready: function (){$(this).jPlayer("play").jPlayer("repeat");},
    swfPath: "Jplayer.swf",
	solution: 'html, flash',
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});


$(".music-icon").click(function(){
	$(".music-icon").removeClass("animated rotate360deg");
	$(".music-icon").css("animation-iteration-count","1");
	$(".music-icon").css("animation-duration","0.6s");
	$(".music-icon").css("animation-timing-function","ease-in-out");
	$(".music-icon").addClass("animated fadeOutRight");
	$(".music-icon").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
		$(".music-icon").hide();
		$(".music-icon").removeClass("animated fadeOutRight");
		$(".music-player").show();
		$(".music-player").addClass("animated fadeInRight");
		$(".music-player").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
			$(".music-player").removeClass("animated fadeInRight");
			})
		});
	});
	

function stopPropagation(e) {//把事件对象传入
            if (e.stopPropagation) //支持W3C标准
                e.stopPropagation();
            else //IE8及以下浏览器
                e.cancelBubble = true;
        }
		
$(document).bind('click',function(){
	if($(".music-player").is(":hidden")){
		}else{
			$(".music-player").addClass("animated fadeOutRight");
			$(".music-player").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
				$(".music-player").removeClass("animated fadeOutRight");
				$(".music-player").hide();
				$(".music-icon").fadeIn("slow");			
				$(".music-icon").css("animation-iteration-count","infinite");
				$(".music-icon").css("animation-duration","2.0s");
				$(".music-icon").css("animation-timing-function","linear");
				$(".music-icon").addClass("animated rotate360deg");})				
			}       
		});

$('.music-player').bind('click',function(e){
    stopPropagation(e);
});