///1
const regExp = /^\d*$/;

const containsOnlyDigits = (str) => {
  return regExp.test(str);
};

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12345a"));

///2

setInterval(() => {
  console.log("Прошла секунда");
}, 1000);
 

///3 
const count = () => {
  let i = 0;
  const interval = setInterval(() => {
    i++;
    console.log(i);
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
};

count();

///4
const wrapper = document.querySelector(".wrapper");

const button = document.querySelector("button");

wrapper.onclick = (event) => {
  if (event.target.tagName.toLowerCase() === "button") {
    if (event.target.classList.contains("red")) {
      event.target.classList.remove("red");
    } else {
      event.target.classList.add("red");
    }
  }
};


///5 

const request = new XMLHttpRequest()
request.open("GET", "data.json")
request.setRequestHeader("Content-type", "application/json")
request.send()

request.onload = () =>{
    const data = JSON.parse(request.response)
    console.log(data);
}
