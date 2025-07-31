/**
	GRADLE - KNOWLEDGE IS POWER
	***** JACOB SERVICES LLC ***
    ***** PROPRIETARY CODE *****
    @author : gradle (gradlecode@outlook.com)
	@date: 08/01/2022 14:43:00
	@version: 7.5.0
	copyright @2022
*/

$(document).ready(function(){
	var html = '';
	for(i in new_list){
		if(new_list[i].name!=='undefined'){
			html += '<div class="gm"><div tag="'+new_list[i].link+'"><img src="'+new_list[i].icon+'"/><span>'+new_list[i].name+'</span></div></div>';
		}
	}
	$('#new_list').html(html);
	
	html = '';
	for(i in games_list){
		if(games_list[i].name!=='undefined'){
			html += '<div class="gm"><div tag="'+games_list[i].link+'"><img src="'+games_list[i].icon+'"/><span>'+games_list[i].name+'</span></div></div>';
		}
	}
	$('#game_list').html(html);
});

$('#btn_menu_show').click(function(){
	$('#menu').show();
});

$('#btn_menu_hide').click(function(){
	$('#menu').hide();
});

$(document).click(function(event) {
	if(event.target.id!=='btn_menu_show'){
		$('#menu').hide();
	}	
});

$('.list').on('click', '.gm > div', function(e){
	//console.log($(this).attr('tag'));
	gradle.event('play_game');
	$('#game').attr('src', $(this).attr('tag')+'');
	$('#content .all_games').hide();
	$('#game_contain').show();
});

$('#menu_home').click(function(){
	$('#game_contain').hide();
	$('#game').attr('src', '');
	$('#content .all_games').show();
});

$('#menu_share').click(function(){
	gradle.event('button_share');
});

$('#menu_more').click(function(){
	gradle.event('button_more');
});

$('#menu_privacy').click(function(){
	gradle.event('button_privacy');
});

$('#menu_exit').click(function(){
	gradle.event('button_exit');
});






