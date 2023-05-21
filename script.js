 // HTML elements
 const startButton = document.getElementById('start');
 const pauseButton = document.getElementById('pause');
 const resetButton = document.getElementById('reset');
 const timerDisplay = document.getElementById('timerDisplay');
 
 // Timer variables
 let timer;
 let startTime;
 let elapsedTime = 0;
 let isRunning = false;
 
 // Event listeners
 startButton.addEventListener('click', startTimer);
 pauseButton.addEventListener('click', pauseTimer);
 resetButton.addEventListener('click', resetTimer);
 
 function startTimer() {
   if (!isRunning) {
     isRunning = true;
     startTime = Date.now() - elapsedTime;
     timer = setInterval(updateTimer, 10); // Update timer every 10 milliseconds
   }
 }
 
 function pauseTimer() {
   if (isRunning) {
     isRunning = false;
     clearInterval(timer);
   }
 }
 
 function resetTimer() {
   clearInterval(timer);
   isRunning = false;
   elapsedTime = 0;
   timerDisplay.innerHTML = formatTime(elapsedTime);
 }
 
 function updateTimer() {
   const currentTime = Date.now();
   elapsedTime = currentTime - startTime;
   timerDisplay.innerHTML = formatTime(elapsedTime);
 }
 
 function formatTime(time) {
   const milliseconds = Math.floor((time % 1000) / 10);
   const seconds = Math.floor((time / 1000) % 60);
   const minutes = Math.floor((time / (1000 * 60)) % 60);
   const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
 
   return (
     pad(hours) + ':' + pad(minutes) + ':' + pad(seconds) + '.' + pad(milliseconds)
   );
 }
 
 function pad(number) {
   return number.toString().padStart(2, '0');
 }