$(document).on('ready', function() {
    console.log('create and begin the game here!');

    player1_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player2_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player3_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player4_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player5_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player6_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player7_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player8_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player9_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player10_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }

    player1_active = false
    player2_active = false
    player3_active = false
    player4_active = false
    player5_active = false
    player6_active = false
    player7_active = false
    player8_active = false
    player9_active = false
    player10_active = false

    function add(tally, display_sel) {
        tally.seconds++
        if (tally.seconds >= 60){
          tally.minutes++;
          tally.seconds = 0;
        };
        if (tally.minutes >= 60){
          tally.hours++;
          tally.minutes = 0;
        };
        if (tally.hours){
          $(display_sel).html(formatTime(tally.hours)+':'+formatTime(tally.minutes)+':'+formatTime(tally.seconds));
        } else {
          $(display_sel).html(formatTime(tally.minutes)+':'+formatTime(tally.seconds));
        }
        var player1_tot = player1_time.hours*3600+player1_time.minutes*60+player1_time.seconds
        var player2_tot = player2_time.hours*3600+player2_time.minutes*60+player2_time.seconds
        var player3_tot = player3_time.hours*3600+player3_time.minutes*60+player3_time.seconds
        var player4_tot = player4_time.hours*3600+player4_time.minutes*60+player4_time.seconds
        var player5_tot = player5_time.hours*3600+player5_time.minutes*60+player5_time.seconds
        var player6_tot = player6_time.hours*3600+player6_time.minutes*60+player6_time.seconds
        var player7_tot = player7_time.hours*3600+player7_time.minutes*60+player7_time.seconds
        var player8_tot = player8_time.hours*3600+player8_time.minutes*60+player8_time.seconds
        var player9_tot = player9_time.hours*3600+player9_time.minutes*60+player9_time.seconds
        var player10_tot = player10_time.hours*3600+player10_time.minutes*60+player10_time.seconds

    };
    function formatTime(num) {
        if(num < 10){
          return '0'+num
        } else {
          return num
        };
    };
    function tally_player1() {
        add(player1_time, '#player1-display')
    }
    function tally_player2() {
        add(player2_time, '#player2-display')
    }
    function tally_player3() {
        add(player3_time, '#player3-display')
    }
    function tally_player4() {
        add(player4_time, '#player4-display')
    }
    function tally_player5() {
        add(player5_time, '#player5-display')
    }
    function tally_player6() {
        add(player6_time, '#player6-display')
    }
    function tally_player7() {
        add(player7_time, '#player7-display')
    }
    function tally_player8() {
        add(player8_time, '#player8-display')
    }
    function tally_player9() {
        add(player9_time, '#player9-display')
    }
    function tally_player10() {
        add(player10_time, '#player10-display')
    }

    var $player1 = $('#player1');
    var $player2 = $('#player2');
    var $player3 = $('#player3');
    var $player4 = $('#player4');
    var $player5 = $('#player5');
    var $player6 = $('#player6');
    var $player7 = $('#player7');
    var $player8 = $('#player8');
    var $player9 = $('#player9');
    var $player10 = $('#player10');

    $player1.click( function(){
        $player1.toggleClass('pressed')
        if(player1_active){
            player1_active = false;
            clearInterval(player1_t)
        } else {
            player1_active = true;
            player1_t = setInterval(tally_player1, 1000)
        }
    });
    $player2.click( function(){
        $player2.toggleClass('pressed')
        if(player2_active){
            player2_active = false;
            clearInterval(player2_t)
        } else {
            player2_active = true;
            player2_t = setInterval(tally_player2, 1000)
        }
    });
    $player3.click( function(){
        $player3.toggleClass('pressed')
        if(player3_active){
            player3_active = false;
            clearInterval(player3_t)
        } else {
            player3_active = true;
            player3_t = setInterval(tally_player3, 1000)
        }
    });
    $player4.click( function(){
        $player4.toggleClass('pressed')
        if(player4_active){
            player4_active = false;
            clearInterval(player4_t)
        } else {
            player4_active = true;
            player4_t = setInterval(tally_player4, 1000)
        }
    });
    $player5.click( function(){
        $player5.toggleClass('pressed')
        if(player5_active){
            player5_active = false;
            clearInterval(player5_t)
        } else {
            player5_active = true;
            player5_t = setInterval(tally_player5, 1000)
        }
    });
    $player6.click( function(){
        $player6.toggleClass('pressed')
        if(player6_active){
            player6_active = false;
            clearInterval(player6_t)
        } else {
            player6_active = true;
            player6_t = setInterval(tally_player6, 1000)
        }
    });
    $player7.click( function(){
        $player7.toggleClass('pressed')
        if(player7_active){
            player7_active = false;
            clearInterval(player7_t)
        } else {
            player7_active = true;
            player7_t = setInterval(tally_player7, 1000)
        }
    });
    $player8.click( function(){
        $player8.toggleClass('pressed')
        if(player8_active){
            player8_active = false;
            clearInterval(player8_t)
        } else {
            player8_active = true;
            player8_t = setInterval(tally_player8, 1000)
        }
    });
    $player9.click( function(){
        $player9.toggleClass('pressed')
        if(player9_active){
            player9_active = false;
            clearInterval(player9_t)
        } else {
            player9_active = true;
            player9_t = setInterval(tally_player9, 1000)
        }
    });
    $player10.click( function(){
        $player10.toggleClass('pressed')
        if(player10_active){
            player10_active = false;
            clearInterval(player10_t)
        } else {
            player10_active = true;
            player10_t = setInterval(tally_player10, 1000)
        }
    });
  })
