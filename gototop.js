/**
 * GotoTop Script
 *
 * Github: https://github.com/isaacdeveloper/gototop-jquery/
 * Author: Isaac Ruiz
 * Install:
 * <script>
     $( document ).ready(function() {
                GotoTop.Init({
                    background: (COLOR)
                });
            });
     </script>
 */

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

        var css = '.cd-top{display:inline-block;height:40px;width:40px;position:fixed;bottom:40px;right:10px;box-shadow:0 0 10px rgba(0,0,0,.05);overflow:hidden;text-indent:100%;white-space:nowrap;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTYgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iOCwyLjggMTYsMTAuNyAxMy42LDEzLjEgOC4xLDcuNiAyLjUsMTMuMiAwLDEwLjcgIi8+PC9zdmc+) center 50% no-repeat '+objectConfig.background+';visibility:hidden;opacity:0;-webkit-transition:opacity .3s 0s,visibility 0s .3s;-moz-transition:opacity .3s 0s,visibility 0s .3s;transition:opacity .3s 0s,visibility 0s .3s}.cd-top.cd-fade-out,.cd-top.cd-is-visible,.no-touch .cd-top:hover{-webkit-transition:opacity .3s 0s,visibility 0s 0s;-moz-transition:opacity .3s 0s,visibility 0s 0s;transition:opacity .3s 0s,visibility 0s 0s}.cd-top.cd-is-visible{visibility:visible;opacity:1}.cd-top.cd-fade-out{opacity:.5}.no-touch .cd-top:hover{background-color:#e86256;opacity:1}@media only screen and (min-width:768px){.cd-top{right:20px;bottom:20px}}@media only screen and (min-width:1024px){.cd-top{height:60px;width:60px;right:30px;bottom:30px}}';

        jQuery("body").append('<a href="#0" class="cd-top">Top</a>');
        jQuery("head").append('<style>'+css+' .cd-top.cd-is-visible {visibility: visible; opacity: 1;z-index:9999;} .cd-top.cd-fade-out { opacity: .5;}</style>');

        $back_to_top = jQuery('.cd-top');

        jQuery(window).scroll(function(){
            ( jQuery(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        });

        //smooth scroll to top
        $back_to_top.on('click', function(event){
            event.preventDefault();
            jQuery('body,html').animate({
                    scrollTop: 0
                }, scroll_top_duration
            );
        });
    };

    return modulo;
}(GotoTop || {});
