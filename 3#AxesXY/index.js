let axisX = 296;
let axisY = 296;
let direction = document.getElementById("point");
const generateValue = () => {
  return Math.floor(Math.random() * 2);
};

const changeAxisValue = () => {
  generateValue()
    ? (console.log("X"),
      generateValue() ? (axisX++, console.log("x + 1 =  ", axisX)) : axisX--,
      console.log("x - 1 =", axisX))
    : (console.log("Y"),
      generateValue() ? (axisY++, console.log("y + 1 =", axisY)) : axisY--,
      console.log("y - 1 =", axisY));
  console.log(" out", axisX, axisY);
  direction.style.left = axisX + "px";
  direction.style.top = axisY + "px";
  return axisX, axisY;
};
const setTimeInterval = setInterval(changeAxisValue, 1000);

setTimeout(stop_interval, 12000);
function stop_interval() {
  console.log("stop");
  clearInterval(setTimeInterval);
}
