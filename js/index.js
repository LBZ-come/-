var httpRequest = new XMLHttpRequest();
var newDate = new Date();

function tiao_zhuan(the_id) {
    var lian_jie = document.getElementById(the_id).getAttribute("href");
    window.open(URL = lian_jie, target = "_Blank");
};

function change_to_main() {
    var part1 = document.getElementById('part1');
    part1.innerHTML = '<address style="text-align: center;">\
    Sanchez的博客网站\
    <br>\
    By:Sanchez\
    <br>\
    QQ:3010910786\
    </address>\
    <h2><a onclick="tiao_zhuan(\'study\')">学习</a></h2>\
    <p>收集了python，前端等等的学习视频链接和资料</p>\
    <hr>\
    <h2><a onclick="tiao_zhuan(\'spiderhub\')">爬虫</a></h2>\
    <p>发布本人写的和转载的一些爬虫</p>\
    <hr>\
    <h2><a>其他</a></h2>\
    <p>其他网站或者资源</p>'
};

function change_to_other() {
    var part1 = document.getElementById('part1');
    part1.innerHTML = '<address style="text-align: center;"">\
    Sanchez的博客网站\
    <br>\
    By:Sanchez\
    <br>\
    QQ:3010910786\
    </address>\
    <h2><a href="other.html" id="other" onclick="tiao_zhuan(\'other\')">常用网站</a></h2>\
    <p>一些平时常逛的网站，包括博客园等等</p>\
    <hr>\
    <h2><a href="mirror_mix.html" id="mirror" onclick="tiao_zhuan(\'mirror\')">镜像站</a></h2>\
    <p>收集的各大镜像站的链接</p>';
};
