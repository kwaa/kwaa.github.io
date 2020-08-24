hexo.extend.filter.register('after_post_render', function (data) {
    data.content = data.content.replace(/<p>(<img [^>]*src="([^"]+)"[^>]*)><\/p>/g, '<figure class="mdui-img-fluid">' + '$1' + 'class="mdui-img-rounded" loading="lazy"></figure>')
    data.content = data.content.replace(/\bvideo-container\b/g, 'mdui-video-container')
    data.content = data.content.replace(/<table>/g, '<div class="mdui-table-fluid mdui-shadow-0"><table class="mdui-table mdui-table-hoverable">')
    data.content = data.content.replace(/<\/table>/g, '</table></div>')
    data.content = data.content.replace(/<h2 [^>]*id="(([^"]+))">([^>]*)<\/h2>/g, '<h2 id="' + '$1' + '"><a href="#' + '$1' + '">##<\/a> ' + '$2' + '<\/h2>')
    data.content = data.content.replace(/<h3 [^>]*id="(([^"]+))">([^>]*)<\/h3>/g, '<h3 id="' + '$1' + '"><a href="#' + '$1' + '">###<\/a> ' + '$2' + '<\/h3>')
    data.content = data.content.replace(/<h4 [^>]*id="(([^"]+))">([^>]*)<\/h4>/g, '<h4 id="' + '$1' + '"><a href="#' + '$1' + '">####<\/a> ' + '$2' + '<\/h4>')
    data.content = data.content.replace(/<h5 [^>]*id="(([^"]+))">([^>]*)<\/h5>/g, '<h5 id="' + '$1' + '"><a href="#' + '$1' + '">#####<\/a> ' + '$2' + '<\/h5>')
    data.content = data.content.replace(/<h6 [^>]*id="(([^"]+))">([^>]*)<\/h6>/g, '<h6 id="' + '$1' + '"><a href="#' + '$1' + '">######<\/a> ' + '$2' + '<\/h6>')
    return data;
});