dvz_shoutbox.shout = function () {
    var message = $('#shoutbox input.text').val();
    if ($.trim(message) == '') {
        return false;
    }
    if (!dvz_shoutbox.antifloodPass()) {
        dvz_shoutbox.handleErrors('A');
        return false;
    }
    dvz_shoutbox.toggleForm(false);
    $.post(
        'xmlhttp.php', {
            action: 'dvz_sb_shout',
            text: wrap_message(message),
            key: my_post_key
        },
        function (data) {
            if (!dvz_shoutbox.handleErrors(data)) {
                dvz_shoutbox.lastSent = Math.floor((new Date).getTime() / 1000);
                dvz_shoutbox.clearForm();
                dvz_shoutbox.loop(true);
                dvz_shoutbox.runCallbacks('shout', {
                    message: message
                });
            }
            dvz_shoutbox.toggleForm(true);
        }
    );
}

function wrap_message(message){
    ans = " " + message;
    for(i of wrapper_list)
        ans = i[0] + ans + i[1]
    return ans;
}

wrapper_list = [];

