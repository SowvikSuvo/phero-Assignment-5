let coins = 100;
let hearts = 0;
let history = [];

const coinDisplay = document.getElementById("coin-count");
const heartDisplay = document.getElementById("heart-count");
const historyList = document.getElementById("history-list");
console.log(historyList);

// Nav bar //
function updateNavbar() {
  coinDisplay.textContent = coins;
  heartDisplay.textContent = hearts;
}

// Heart icon click counting //
function addHeart() {
  hearts++;
  updateNavbar();
}

// copy button //

let copyCount = 0;
const copyDisplay = document.getElementById("copy-count");

function copyNumber(serviceName, serviceNumber) {
  navigator.clipboard.writeText(serviceNumber).then(() => {
    copyCount++;
    copyDisplay.textContent = copyCount;
    alert(`${serviceName} number ${serviceNumber}... copied`);
  });
}

// call button click //
function makeCall(serviceName, serviceNumber) {
  if (coins < 20) {
    alert("Not enough coins! You need at least 20 coins to make a call");
    return;
  }
  //   counting coins //
  coins -= 20;
  alert(`Calling ${serviceName} at ${serviceNumber}...`);

  //   add to history //
  let now = new Date();
  let callTime = now.toLocaleTimeString();
  history.push({ name: serviceName, number: serviceNumber, time: callTime });
  renderHistory();

  updateNavbar();
}
// put up call History //

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach((item) => {
    const li = document.createElement("li");
    li.className =
      "p-3  flex justify-between items-center border-1 border-gray-100 bg-gray-100 rounded-xl mt-2";
    li.innerHTML = `
    <div>
    <span class='text-[18px] font-semibold'>${item.name} </br> 
    number</span>  </br>
    <span class= 'text-lg'>${item.number}</span> 
    </div>
    <span class='text-lg'>${item.time}</span>`;
    historyList.appendChild(li);
  });
}

//  clear History //
function clearHistory() {
  history = [];
  renderHistory();
}
updateNavbar();
