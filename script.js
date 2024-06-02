const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Battleground Mobile India",
    name: "Battleground India Series",
    
  },
  {
    title: "Valorant",
    name: "Valorant Championship",
    
  },
  {
    title: "Apex Legend Mobile",
    name: "Apex Legend",
    source:
      "songs/Song3.mp3",
  },
  {
    title: "Rocket League",
    name: "Rocket League",
    source:
      "songs/Song4.mp3",
  },
  {
    title: "Freefire",
    name: "Freefire Championship",
    source:
      "songs/Song5.mp3",
  },

  {
    title: "Pokemon Unite",
    name: "Pokemon Unite",
    source:
      "songs/Song6.mp3",
  },
  {
    title: "Call Of Duty Mobile",
    name: "Call Of Duty Mobile Championship",
    source:
      "songs/Song7.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});


// log in Js code //
const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform authentication logic here
  // For this example, we'll use a hardcoded username and password
  const validUsername = 'myusername';
  const validPassword = 'mypassword';

  if (username === validUsername && password === validPassword) {
    messageDiv.textContent = 'Login successful!';
    messageDiv.style.color = 'green';
  } else {
    messageDiv.textContent = 'Invalid username or password.';
    messageDiv.style.color = 'red';
  }
});

// Payment Integration //
const paytmBtn = document.getElementById('paytmBtn');
const phonepayBtn = document.getElementById('phonepayBtn');
const upiBtn = document.getElementById('upiBtn');
const paytmWithdrawBtn = document.getElementById('paytmWithdrawBtn');
const phonepayWithdrawBtn = document.getElementById('phonepayWithdrawBtn');
const upiWithdrawBtn = document.getElementById('upiWithdrawBtn');
const depositAmount = document.getElementById('depositAmount');
const withdrawAmount = document.getElementById('withdrawAmount');
const balanceAmount = document.getElementById('balanceAmount');

let balance = 0;
updateBalance();

paytmBtn.addEventListener('click', () => {
  processPayment('Paytm', 'deposit');
});

phonepayBtn.addEventListener('click', () => {
  processPayment('PhonePe', 'deposit');
});

upiBtn.addEventListener('click', () => {
  processPayment('UPI', 'deposit');
});

paytmWithdrawBtn.addEventListener('click', () => {
  processPayment('Paytm', 'withdraw');
});

phonepayWithdrawBtn.addEventListener('click', () => {
  processPayment('PhonePe', 'withdraw');
});

upiWithdrawBtn.addEventListener('click', () => {
  processPayment('UPI', 'withdraw');
});

function processPayment(paymentMethod, transactionType) {
  const amount = parseFloat(transactionType === 'deposit' ? depositAmount.value : withdrawAmount.value);
  if (!isNaN(amount) && amount > 0) {
    if (transactionType === 'deposit') {
      balance += amount;
    } else if (transactionType === 'withdraw' && amount <= balance) {
      balance -= amount;
    } else {
      alert('Insufficient balance for withdrawal.');
      return;
    }
    updateBalance();
    alert(`${paymentMethod} ${transactionType} of $${amount.toFixed(2)} successful!`);
    depositAmount.value = '';
    withdrawAmount.value = '';
  } else {
    alert('Please enter a valid positive amount.');
  }
}

function updateBalance() {
  balanceAmount.textContent = `$${balance.toFixed(2)}`;
}


// bet Script //

// Define an array of players and their initial points
const players = [
  { name: 'Player 1', points: 100, multiplier: 1 },
  { name: 'Player 2', points: 80, multiplier: 2 },
  { name: 'Player 3', points: 120, multiplier: 1.5 },
];

// Function to update the point table
function updatePointTable() {
  const tableBody = document.querySelector('#pointTable tbody');
  tableBody.innerHTML = ''; // Clear existing rows

  // Loop through players and create table rows
  players.forEach(player => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = player.name;
    row.appendChild(nameCell);

    const pointsCell = document.createElement('td');
    pointsCell.textContent = player.points * player.multiplier;
    row.appendChild(pointsCell);

    const multiplierCell = document.createElement('td');
    multiplierCell.textContent = player.multiplier;
    row.appendChild(multiplierCell);

    tableBody.appendChild(row);
  });
}

// Call the updatePointTable function initially
updatePointTable();

// Simulate multiplier changes every 5 seconds
setInterval(() => {
  // Randomly change multipliers for players
  players.forEach(player => {
    player.multiplier = Math.random() * 2 + 0.5; // Random multiplier between 0.5 and 2.5
  });

  // Update the point table
  updatePointTable();
}, 5000);