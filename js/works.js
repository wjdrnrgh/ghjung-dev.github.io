(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var nextBtn=document.getElementById("nextBtn"),prevBtn=document.getElementById("prevBtn"),worksInput1=document.getElementById("works1"),worksInput2=document.getElementById("works2"),worksInput3=document.getElementById("works3"),worksInput4=document.getElementById("works4"),worksInput5=document.getElementById("works5"),worksInput6=document.getElementById("works6"),worksInput7=document.getElementById("works7"),inputArr=document.querySelectorAll("input[type=radio]"),firstCard=document.getElementById("portfolioCard"),cardFrontBtn=document.querySelectorAll(".frontBtn"),cardBackBtn=document.querySelectorAll(".backBtn"),cardActiveCheck=null,worksInput1Status=null,worksInput2Status=null,worksInput3Status=null,worksInput4Status=null,worksInput5Status=null,worksInput6Status=null,worksInput7Status=null,statusCheck=function(){worksInput1Status=worksInput1.checked,worksInput2Status=worksInput2.checked,worksInput3Status=worksInput3.checked,worksInput4Status=worksInput4.checked,worksInput5Status=worksInput5.checked,worksInput6Status=worksInput6.checked,worksInput7Status=worksInput7.checked},handleNextBtn=function(){statusCheck();var t=null;worksInput1Status&&(worksInput2.checked=!0,t=worksInput2),worksInput2Status&&(worksInput3.checked=!0,t=worksInput3),worksInput3Status&&(worksInput4.checked=!0,t=worksInput4),worksInput4Status&&(worksInput5.checked=!0,t=worksInput5),worksInput5Status&&(worksInput6.checked=!0,t=worksInput6),worksInput6Status&&(worksInput7.checked=!0,t=worksInput7),worksInput7Status&&(worksInput1.checked=!0,t=worksInput1),handleCardTitle(null,t)},handlePrevBtn=function(){statusCheck();var t=null;worksInput1Status&&(worksInput7.checked=!0,t=worksInput7),worksInput2Status&&(worksInput1.checked=!0,t=worksInput1),worksInput3Status&&(worksInput2.checked=!0,t=worksInput2),worksInput4Status&&(worksInput3.checked=!0,t=worksInput3),worksInput5Status&&(worksInput4.checked=!0,t=worksInput4),worksInput6Status&&(worksInput5.checked=!0,t=worksInput5),worksInput7Status&&(worksInput6.checked=!0,t=worksInput6),handleCardTitle(null,t)},handleFlipActive=function(t){t.target.parentElement.parentElement.parentElement.parentElement.style.transform="rotateY(-180deg)"},handleFlipActiveN=function(t){t.target.parentElement.parentElement.parentElement.parentElement.style.transform=""},handleCardTitle=function(t,e){var n=null;cardActiveCheck?cardActiveCheck.classList.remove("card_active"):(cardActiveCheck=firstCard.querySelector(".front_content")).classList.remove("card_active"),(n=t?t.target.labels[0].querySelector(".front_content"):e.labels[0].querySelector(".front_content")).classList.add("card_active"),cardActiveCheck=n};statusCheck(),nextBtn.addEventListener("click",handleNextBtn),prevBtn.addEventListener("click",handlePrevBtn),cardFrontBtn.forEach(function(t){t.addEventListener("click",handleFlipActive)}),cardBackBtn.forEach(function(t){t.addEventListener("click",handleFlipActiveN)}),inputArr.forEach(function(t){t.addEventListener("change",handleCardTitle)});

},{}]},{},[1]);
