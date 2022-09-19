const seconds: HTMLDivElement | null = document.querySelector(".seconds");
const minutes: HTMLDivElement | null = document.querySelector(".minutes");
const hours: HTMLDivElement | null = document.querySelector(".hours");

interface timeObject {
  seconds: number;
  minutes: number;
  hours: number;
}

let time: timeObject = {
  seconds: 0,
  minutes: 0,
  hours: 0,
};

const getTime = (): timeObject => {
  const date = new Date();
  return {
    seconds: date.getSeconds(),
    minutes: date.getMinutes(),
    hours: date.getHours(),
  };
};

const rotateArms = (): void => {
    seconds!.style.transform = `rotate(${(time.seconds * 6)}deg)`;
    minutes!.style.transform = `rotate(${time.minutes * 6}deg)`;
    hours!.style.transform = `rotate(${time.hours * 30}deg)`;
}

setInterval((): void => {
    time = getTime();
    rotateArms();
}, 1000);
