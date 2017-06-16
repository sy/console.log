var console = function(o) {
    return {
        log : function(r) {
			var css = "border-left: 4px #B1043E solid; padding-left: 10px; color: #B1043E; font-size: 12px; font-family: 'Monaco';";
            "object" == typeof r ? o.log(r) : o.log("%c" + r, css)
        },
        info : function(r) {
			var css = "color: navy; font-size: 12px; font-family: 'Monaco';"
            o.info("%c" + r, css)
        },
        warn : function(r) {
			var css = "color: orange; font-size: 12px; font-family: 'Monaco';"
            o.warn("%c" + r, css)
        },
        error : function(r) {
			var css = "background-color: red; color: white; font-size: 12px; font-family: 'Monaco';"
            o.error("%c" + r, css)
        }
    }
}

(window.console);
c = {
    l:function(o) { console.log(o) },
    i:function(o) { console.info(o) },
    w:function(o) { console.warn(o) },
    e:function(o) { console.error(o) }
};
