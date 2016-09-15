var GotoTop = function(modulo) {

    modulo.Init = function(config) {
        var offset = 300,
            offset_opacity = 1200,
            scroll_top_duration = 700;
        var objectConfig = {
            background: "rgba(232,98,86,.8)"
        };

        if(config) {
            if(config.background) {
                objectConfig.background = config.background;
            }
        }

        var css = '.cd-top{display:inline-block;height:40px;width:40px;position:fixed;bottom:40px;right:10px;box-shadow:0 0 10px rgba(0,0,0,.05);overflow:hidden;text-indent:100%;white-space:nowrap;background:url(../img/cd-top-arrow.svg) center 50% no-repeat '+objectConfig.background+';visibility:hidden;opacity:0;-webkit-transition:opacity .3s 0s,visibility 0s .3s;-moz-transition:opacity .3s 0s,visibility 0s .3s;transition:opacity .3s 0s,visibility 0s .3s}.cd-top.cd-fade-out,.cd-top.cd-is-visible,.no-touch .cd-top:hover{-webkit-transition:opacity .3s 0s,visibility 0s 0s;-moz-transition:opacity .3s 0s,visibility 0s 0s;transition:opacity .3s 0s,visibility 0s 0s}.cd-top.cd-is-visible{visibility:visible;opacity:1}.cd-top.cd-fade-out{opacity:.5}.no-touch .cd-top:hover{background-color:#e86256;opacity:1}@media only screen and (min-width:768px){.cd-top{right:20px;bottom:20px}}@media only screen and (min-width:1024px){.cd-top{height:60px;width:60px;right:30px;bottom:30px}}';

        $("body").append('<a href="#0" class="cd-top">Top</a>');
        $("head").append('<style>'+css+' .cd-top.cd-is-visible {visibility: visible; opacity: 1;} .cd-top.cd-fade-out { opacity: .5;}</style>');

        $back_to_top = $('.cd-top');

        $(window).scroll(function(){
            ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        });

        //smooth scroll to top
        $back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0,
                }, scroll_top_duration
            );
        });
    };

    return modulo;
}(GotoTop || {});
