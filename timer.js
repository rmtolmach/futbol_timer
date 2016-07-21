$(document).on('ready', function() {
    console.log('create and begin the game here!');

    player_time = {
        minutes: 0,
        seconds: 0,
        hours: 0
    }
    player_active = false
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
    };
    function formatTime(num) {
        if(num < 10){
          return '0'+num
        } else {
          return num
        };
    };


    function tally_player() {

        add(player_time, '#player1-display');
    }

    $('a').on('click', function () {
        $foundId = this.id
        console.log($foundId)
        // $foundId.toggleClass('pressed')
        if(player_active){
            player_active = false;
            clearInterval(player_t)
        } else {
            player_active = true;
            player_t = setInterval(tally_player, 1000)
        }
    });
  })
