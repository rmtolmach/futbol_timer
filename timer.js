$(document).on('ready', function() {
    console.log('create and begin the game here!');

    player_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player1_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player_active = false
    player1_active = false
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
        var d_tot = player_time.hours*3600+player_time.minutes*60+player_time.seconds
        var l_tot = player1_time.hours*3600+player1_time.minutes*60+player1_time.seconds
        var pct = parseInt(d_tot/(d_tot+l_tot)*100)
    };
    function formatTime(num) {
        if(num < 10){
          return '0'+num
        } else {
          return num
        };
    };
    function tally_player() {
        add(player_time, '#player-display')
    }
    function tally_player1() {
        add(player1_time, '#not-player-display')
    }
    var $player = $('#player');
    var $not_player = $('#not-player')
    $player.click( function(){
        $player.toggleClass('pressed')
        if(player_active){
            player_active = false;
            clearInterval(player_t)
        } else {
            player_active = true;
            if(player1_active){
                $not_player.toggleClass('pressed')
                player1_active = false
                clearInterval(player1_t)
            }
            player_t = setInterval(tally_player, 1000)
        }
    });
    $not_player.click( function(){
        $not_player.toggleClass('pressed')
        if(player1_active){
          player1_active = false;
          clearInterval(player1_t)
        } else {
          player1_active = true;
          if(player_active){
            $player.toggleClass('pressed')
            player_active = false
            clearInterval(player_t)
        }
        player1_t = setInterval(tally_player1, 1000)
      }
    });
  })
