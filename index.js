"use strict";
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
let time = {
    seconds: 0,
    minutes: 0,
    hours: 0,
};
const getTime = () => {
    const date = new Date();
    return {
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours(),
    };
};
const rotateArms = () => {
    seconds.style.transform = `rotate(${(time.seconds * 6)}deg)`;
    minutes.style.transform = `rotate(${time.minutes * 6}deg)`;
    hours.style.transform = `rotate(${time.hours * 30}deg)`;
};
setInterval(() => {
    time = getTime();
    rotateArms();
}, 1000);
