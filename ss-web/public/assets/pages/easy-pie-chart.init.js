!function(a){"use strict";var b=function(){};b.prototype.init=function(){a(".easy-pie-chart-1").easyPieChart({easing:"easeOutBounce",barColor:"#5d9cec",lineWidth:10,animate:1e3,scaleColor:!1,lineCap:"square",trackColor:"#e5e5e5",onStep:function(b,c,d){a(this.el).find(".percent").text(Math.round(d))}}),a(".easy-pie-chart-2").easyPieChart({easing:"easeOutBounce",barColor:"#fb6d9d",lineWidth:10,trackColor:!1,lineCap:"butt",onStep:function(b,c,d){a(this.el).find(".percent").text(Math.round(d))}}),a(".easy-pie-chart-3").easyPieChart({easing:"easeOutBounce",barColor:"#34d3eb",lineWidth:10,lineCap:"square",scaleColor:"transparent",onStep:function(b,c,d){a(this.el).find(".percent").text(Math.round(d))}}),a(".easy-pie-chart-4").easyPieChart({easing:"easeOutBounce",barColor:"#5fbeaa",lineWidth:10,onStep:function(b,c,d){a(this.el).find(".percent").text(Math.round(d))}})},a.EasyPieChart=new b,a.EasyPieChart.Constructor=b}(window.jQuery),function(a){"use strict";a.EasyPieChart.init()}(window.jQuery);