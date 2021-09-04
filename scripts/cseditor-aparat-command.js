$.sceditor.command.set('video', {
    _dropDown: function (editor, caller) {
        var $content, videourl, videotype;

        // Excludes MySpace TV and Yahoo Video as I couldn't actually find them. Maybe they are gone now?
        $content = $(
            '<div>' +
            '<label for="videotype">' + editor._('Video Type:') + '</label> ' +
            '<select id="videotype">' +
            '<option value="aparat">' + editor._('Aparat') + '</option>' +
            '<option value="dailymotion">' + editor._('Dailymotion') + '</option>' +
            '<option value="facebook">' + editor._('Facebook') + '</option>' +
            '<option value="liveleak">' + editor._('LiveLeak') + '</option>' +
            '<option value="metacafe">' + editor._('MetaCafe') + '</option>' +
            '<option value="veoh">' + editor._('Veoh') + '</option>' +
            '<option value="vimeo">' + editor._('Vimeo') + '</option>' +
            '<option value="youtube">' + editor._('Youtube') + '</option>' +
            '</select>' +
            '</div>' +
            '<div>' +
            '<label for="link">' + editor._('Video URL:') + '</label> ' +
            '<input type="text" id="videourl" value="http://" />' +
            '</div>' +
            '<div><input type="button" class="button" value="' + editor._('Insert') + '" /></div>'
        );

        $content.find('.button').click(function (e) {
            videourl = $content.find('#videourl').val();
            videotype = $content.find('#videotype').val();

            if (videourl !== '' && videourl !== 'http://')
                if (videotype == "aparat")
                    editor.insert('[aparat]' + videourl + '[/aparat]');
                else
                    editor.insert('[video=' + videotype + ']' + videourl + '[/video]');

            editor.closeDropDown(true);
            e.preventDefault();
        });

        editor.createDropDown(caller, 'insertvideo', $content);
    },
    exec: function (caller) {
        $.sceditor.command.get('video')._dropDown(this, caller);
    },
    txtExec: function (caller) {
        $.sceditor.command.get('video')._dropDown(this, caller);
    },
    tooltip: 'Insert a video'
});