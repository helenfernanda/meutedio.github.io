﻿/* Fade-In Page script �2008 John Davenport Scheuer
As first seen in http://www.dynamicdrive.com/forums/
username:jscheuer1 - This credit must remain for legal use.
*/

fadeInPage.speed=10; //Set speed of transition for non-IE, lower numbers are faster, 20 is the minimum safe value
fadeInPage.bg='#fff'; //Set backgroud style (color or color and image) of transition division for non-IE, should match page background or the predominant color of the page

///////////////// Stop Editing /////////////////

function fadeInPage(){
var el=document.getElementById("fadeDiv");
el.style[fadeInPage.prprt] = el.style[fadeInPage.prprt] == ''? 1 : el.style[fadeInPage.prprt];
if (el.style[fadeInPage.prprt] > 0){
el.style[fadeInPage.prprt] = el.style[fadeInPage.prprt] - 0.05;
setTimeout("fadeInPage()", fadeInPage.speed);
}
else {
el.style[fadeInPage.prprt] = 0;
if(document.removeChild)
el.parentNode.removeChild(el);
}
}
if(document.documentElement&&document.documentElement.style){
fadeInPage.d=document.documentElement, fadeInPage.t=function(o){return typeof fadeInPage.d.style[o]=='string'};
fadeInPage.prprt=fadeInPage.t('opacity')? 'opacity' : fadeInPage.t('MozOpacity')? 'MozOpacity' : fadeInPage.t('KhtmlOpacity')? 'KhtmlOpacity' : null;
}
fadeInPage.set=function(){
var prop=fadeInPage.prprt=='opacity'? 'opacity' : fadeInPage.prprt=='MozOpacity'? '-moz-opacity' : '-khtml-opacity';
document.write('\n<style type="text/css">\n#fadeDiv {\nheight:'+window.innerHeight+'px;display:block;position:fixed;'+
'z-index:10000;top:0;left:0;background:'+fadeInPage.bg+';width:100%;\n'+ prop +':1;\n}\n<\/style>\n');
}
if(window.addEventListener&&fadeInPage.prprt){
fadeInPage.set();
window.addEventListener('load', fadeInPage, false);
}