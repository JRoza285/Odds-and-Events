
// link HTML
const app = document.getElementById("app");

// HTML and CSS layout
app.innerHTML = `
  <style>
    body {
      font-family: Arial, sans-serif;
      background: aquamarine;
      padding: 30px;
      text-align: center;
    }

    h1 {
      color: black;
    }

    input {
      padding: 8px;
      width: 150px;
      font-size: 16px;
    }

    button {
      margin: 5px;
      padding: 10px 15px;
      font-size: 16px;
      cursor: pointer;
    }

    .display {
      margin-top: 20px;
      padding: 15px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 0 5px black;
    }

    .section-title {
      font-weight: bold;
      margin-bottom: 10px;
      color: black;
    }

    .numbers {
      min-height: 24px;
      font-size: 18px;
      color: black;
    }
  </style>

  <h1>Add a Number to the Bank</h1>

  <input type="number" id="numberInput" placeholder="Enter number">
  <br>
  <button id="addBtn">Add Number</button>
  <button id="sortOneBtn">Sort 1</button>
  <button id="sortAllBtn">Sort All</button>

  <div class="display">
    <div class="section-title">Bank</div>
    <div id="bankDisplay" class="numbers"></div>
  </div>

  <div class="display">
    <div class="section-title">Odds</div>
    <div id="oddsDisplay" class="numbers"></div>
  </div>

  <div class="display">
    <div class="section-title">Evens</div>
    <div id="evensDisplay" class="numbers"></div>
  </div>
`;

// JS

const bank = [];
const odds = [];
const evens = [];

const input = document.getElementById("numberInput");
const bankDisplay = document.getElementById("bankDisplay");
const oddsDisplay = document.getElementById("oddsDisplay");
const evensDisplay = document.getElementById("evensDisplay");

function updateDisplays() {
  bankDisplay.textContent = bank.join(", ");
  oddsDisplay.textContent = odds.join(", ");
  evensDisplay.textContent = evens.join(", ");
}

document.getElementById("addBtn").addEventListener("click", () => {
  const num = parseInt(input.value);
  if (!isNaN(num)) {
    bank.push(num);
    input.value = "";
    updateDisplays();
  }
});

document.getElementById("sortOneBtn").addEventListener("click", () => {
  if (bank.length > 0) {
    const num = bank.shift();
    if (num % 2 === 0) evens.push(num);
    else odds.push(num);
    updateDisplays();
  }
});

document.getElementById("sortAllBtn").addEventListener("click", () => {
  while (bank.length > 0) {
    const num = bank.shift();
    if (num % 2 === 0) evens.push(num);
    else odds.push(num);
  }
  updateDisplays();
});

