(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{32:function(e,a,t){e.exports=t(70)},37:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},58:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(28),l=t.n(c),m=(t(37),t(9)),s=t(10),i=t(12),o=t(11),u=(t(38),t(17)),p=t.n(u),d=t(29),E=t(76),h=t(71),w=t(77),f=t(74),y=(t(40),t(18)),v=t.n(y),b=t(30),g=t(31),N=t(72),_=t(73),S=(t(58),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={city:""},e.onSubmit=function(a){a.preventDefault(),""===e.state.city?alert("City cannot be empty"):(e.props.SearchingCity(e.state.city),e.setState({city:""}))},e.onChange=function(a){e.setState(Object(b.a)({},a.target.name,a.target.value))},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,className:"formCity"},r.a.createElement(h.a,null,r.a.createElement(N.a,{type:"submit"},r.a.createElement("span",null,r.a.createElement(g.a,{size:20}))),r.a.createElement(_.a,{name:"city",onChange:this.onChange,value:this.state.city,placeholder:"Search for places..."})))}}]),t}(r.a.Component)),x=t(15),D=t.n(x),C=(t(62),function(e){return r.a.createElement(f.a,null,r.a.createElement("span",{className:"title"},"Wind Status"),r.a.createElement("br",null),r.a.createElement("span",{className:"number"},e.wind_speed,r.a.createElement("span",{className:"speed"}," km/h")))}),j=t(13),O=(t(63),function(e){return r.a.createElement(f.a,null,r.a.createElement("span",{className:"title"},"Sunrise & Sunset"),r.a.createElement("br",null),r.a.createElement("div",{className:"square"},r.a.createElement(h.a,null,r.a.createElement("div",{className:"circle1"},r.a.createElement(j.b,null)),e.sun_rise),r.a.createElement(h.a,null,r.a.createElement("div",{className:"circle2"},r.a.createElement(j.a,null)),e.sun_set)))}),k=(t(64),function(e){return r.a.createElement(f.a,{id:"humidity"},r.a.createElement("span",{className:"title"},"Humidity"),r.a.createElement("br",null),r.a.createElement("div",{className:"wrapHumidity"},r.a.createElement("span",{className:"number"},e.humidity),r.a.createElement("span",{className:"percentage"},"%")))}),T=(t(65),function(e){return r.a.createElement(f.a,null,r.a.createElement("span",{className:"title"},"Visibility"),r.a.createElement("br",null),r.a.createElement("span",{className:"number"},e.visibility,r.a.createElement("span",{className:"km"}," km")))}),I=(t(66),function(e){return r.a.createElement(f.a,null,r.a.createElement("span",{className:"title"},"Air Pressure"),r.a.createElement("br",null),r.a.createElement("span",{className:"number"},e.air_pressure,r.a.createElement("span",{className:"mbar"},"mbar")))}),L=t(75),M=(t(67),function(e){return r.a.createElement(f.a,{className:"top"},r.a.createElement(L.a,null,e.day,r.a.createElement("br",null),r.a.createElement("span",{className:"weather-icon"},e.icon),r.a.createElement("br",null),r.a.createElement("span",{className:"temp-full"},e.max,r.a.createElement("span",{className:"temp-degree"},"\xb0C")," - ",e.min,r.a.createElement("span",{className:"temp-degree"},"\xb0C"))))}),F=(t(68),function(e){return r.a.createElement(f.a,null,r.a.createElement("span",{className:"title"},"Max & Min Temperature"),r.a.createElement("br",null),r.a.createElement("div",{className:"squareTemp"},r.a.createElement(h.a,null,r.a.createElement("div",{className:"circleRed"},r.a.createElement(j.c,null)),e.maxDis,"\xb0"),r.a.createElement(h.a,null,r.a.createElement("div",{className:"circleBlue"},r.a.createElement(j.d,null)),e.minDis,"\xb0")))}),W=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).SearchingCity=function(){var e=Object(d.a)(p.a.mark((function e(a){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api",e.next=3,v.a.get("".concat(t,"/location/search/?query=").concat(a)).then((function(e){var a=e.data[0].woeid,t=e.data[0].title;n.setState({city:a,title:t})})).catch((function(){return alert("City is not listed")}));case 3:return r=n.state.city,e.next=6,v.a.get("".concat(t,"/location/").concat(r)).then((function(e){for(var a=e.data.consolidated_weather[0].min_temp,t=e.data.consolidated_weather[0].max_temp,r=e.data.consolidated_weather[0].the_temp,c=e.data.consolidated_weather[0].wind_speed,l=e.data.consolidated_weather[0].visibility,m=e.data.consolidated_weather[0].air_pressure,s=e.data.consolidated_weather[0].weather_state_abbr,i=e.data.time,o=e.data.consolidated_weather[0],u=e.data,p=e.data.consolidated_weather,d=D()(i).format("LLLL").split(" "),E=[1,2,3],h=E.length-1;h>=0;h--)d.splice(E[h],1);var w=d.join(" ");n.setState({minTemp:a.toString().slice(0,4),maxTemp:t.toString().slice(0,4),theTemp:r.toString().slice(0,4),windSpeed:c.toString().slice(0,4),visibility:parseInt(l),air_pressure:parseFloat(m),theIcon:s,theDate:w,Datas:o,Datas2:u,Datas3:p})}));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.state={city:null,title:"",cityNumber:null,minTemp:0,maxTemp:0,theTemp:0,windSpeed:0,visibility:0,air_pressure:0,theDate:"Monday, 0:00 AM",theIcon:"",Datas:[],Datas2:[],Datas3:[]},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,a=e.theTemp,t=e.title,n=e.theIcon,c=e.theDate,l=e.windSpeed,m=e.visibility,s=e.air_pressure,i=e.Datas,o=e.Datas2,u=e.Datas3,p=u.map((function(e){return D()(e.applicable_date).format("dddd")})),d=u.map((function(e){return e.weather_state_abbr}));console.log(d);var y=u.map((function(e){return parseInt(e.min_temp)})),v=u.map((function(e){return parseInt(e.max_temp)})),b="https://www.metaweather.com/static/img/weather/".concat(n,".svg"),g=D()(o.sun_rise||0).format("LT"),N=D()(o.sun_set||0).format("LT"),_=i.weather_state_name,x=i.humidity||0,j=(1.60934*m).toFixed(1),L=s.toFixed(1),W=parseInt(i.max_temp)||0,q=parseInt(i.min_temp)||0;return r.a.createElement("div",{className:"main"},r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement(w.a,{md:3,className:"vert-1"},r.a.createElement(f.a,{className:"weather-search"},r.a.createElement(S,{city:this.state.city,SearchingCity:this.SearchingCity})),r.a.createElement(f.a,null,r.a.createElement("span",{className:"cityName"},t),r.a.createElement("span",null,r.a.createElement("img",{alt:"",src:b})),r.a.createElement("span",{className:"typeWeather"},_)),r.a.createElement(f.a,null,r.a.createElement("div",{className:"weather-temp"},a,r.a.createElement("span",{className:"temp-degree"},"\xb0C"))),r.a.createElement(f.a,null,r.a.createElement("div",{className:"weather-date"},c))),r.a.createElement(w.a,{md:9,className:"vert-2"},r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"mapForecast"},r.a.createElement(M,{day:p[0],icon:r.a.createElement("img",{src:"https://www.metaweather.com/static/img/weather/".concat(d[0],".svg"),alt:""}),min:y[0],max:v[0]}),r.a.createElement(M,{day:p[1],icon:r.a.createElement("img",{src:"https://www.metaweather.com/static/img/weather/".concat(d[1],".svg"),alt:""}),min:y[1],max:v[1]}),r.a.createElement(M,{day:p[2],icon:r.a.createElement("img",{src:"https://www.metaweather.com/static/img/weather/".concat(d[2],".svg"),alt:""}),min:y[2],max:v[2]}),r.a.createElement(M,{day:p[3],icon:r.a.createElement("img",{src:"https://www.metaweather.com/static/img/weather/".concat(d[3],".svg"),alt:""}),min:y[3],max:v[3]}),r.a.createElement(M,{day:p[4],icon:r.a.createElement("img",{src:"https://www.metaweather.com/static/img/weather/".concat(d[4],".svg"),alt:""}),min:y[4],max:v[4]}),r.a.createElement(M,{day:p[5],icon:r.a.createElement("img",{src:"https://www.metaweather.com/static/img/weather/".concat(d[5],".svg"),alt:""}),min:y[5],max:v[5]})),r.a.createElement(f.a,{className:"bottom"},r.a.createElement("span",{className:"header-title"},"Today's Highlight"),r.a.createElement(h.a,null,r.a.createElement(w.a,{md:4},r.a.createElement(F,{maxDis:W,minDis:q})),r.a.createElement(w.a,{md:4},r.a.createElement(C,{wind_speed:l})),r.a.createElement(w.a,{md:4},r.a.createElement(O,{sun_rise:g,sun_set:N}))),r.a.createElement(h.a,null,r.a.createElement(w.a,{md:4},r.a.createElement(k,{humidity:x})),r.a.createElement(w.a,{md:4},r.a.createElement(T,{visibility:j})),r.a.createElement(w.a,{md:4},r.a.createElement(I,{air_pressure:L})))))))))}}]),t}(r.a.Component),q=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,null))}}]),t}(r.a.Component);t(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.f1623905.chunk.js.map