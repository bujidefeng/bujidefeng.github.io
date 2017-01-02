$(".video_player_1").hover(function(){
								Medio = document.getElementById("video_player_1");
								$("#jquery_jplayer").jPlayer("pause");
								Medio.play();
						},function(){
								Medio = document.getElementById("video_player_1");
								$("#jquery_jplayer").jPlayer("play");
								Medio.load();
							})
							
$(".video_player_2").hover(function(){
								Medio = document.getElementById("video_player_2");
								$("#jquery_jplayer").jPlayer("pause");
								Medio.play();
						},function(){
								Medio = document.getElementById("video_player_2");
								$("#jquery_jplayer").jPlayer("play");
								Medio.load();
							})

$(".video_player_3").hover(function(){
								Medio = document.getElementById("video_player_3");
								$("#jquery_jplayer").jPlayer("pause");
								Medio.play();
						},function(){
								Medio = document.getElementById("video_player_3");
								$("#jquery_jplayer").jPlayer("play");
								Medio.load();
							})