hexo.extend.filter.register('after_post_render', function (data) {
    data.content = data.content.replace(/(<img [^>]*src="([^"]+)"[^>]*)/g, '$1' + 'class="mdui-img-rounded" loading="lazy"')
    data.content = data.content.replace(/\bvideo-container\b/g, 'mdui-video-container')
    data.content = data.content.replace(/<table>/g, '<div class="mdui-table-fluid mdui-shadow-0"><table class="mdui-table mdui-table-hoverable">')
    data.content = data.content.replace(/<\/table>/g, '</table></div>')
    return data;
});