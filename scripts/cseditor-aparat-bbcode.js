$.sceditor.plugins.bbcode.bbcode.set('aparat', {
    tags: {
        iframe: {
            "bbcode-type": ["aparat"]
        }
    },
    format: function ($element, content) {
        return '[aparat]' + $element.data('mybb-vsrc') + '[/aparat]';
    },
    html: function (token, attrs, content) {
        matches = content.match(/https\:\/\/(www.)?aparat.com\/v\/([a-z A-Z 0-9]{5}).*/);
        url = matches ? 'https://www.aparat.com/video/video/embed/videohash/' + matches[2] + '/vt/frame' : false;
        return '<iframe width="560" height="315" src="{url}" data-mybb-vsrc="{src}"="{src}" bbcode-type="aparat" frameborder="0"></iframe>'
            .replace('{url}', url)
            .replace('{src}', content)
    }
})