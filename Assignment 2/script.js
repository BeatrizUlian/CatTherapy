//Function to show random cat image when clicking on image

var imgsCatsArray = [ 
'https://media3.giphy.com/media/NfzERYyiWcXU4/giphy.gif?cid=ecf05e472pclkd46y0ygmnvwjo7c475hn8muxtruljfom6ov&rid=giphy.gif&ct=g',
'https://media4.giphy.com/media/39s7r41BKRcteKOKAG/giphy.gif?cid=ecf05e47fii8nqsp38f01gwkjnhbsycsv0znlz7bi5j4h5pv&rid=giphy.gif&ct=g',
'https://media0.giphy.com/media/cuPm4p4pClZVC/giphy.gif?cid=ecf05e47v0na4e8kgdlxznobvr4zbcka83i4txpxqulkboa0&rid=giphy.gif&ct=g',
'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTFiYzQ5ODgxNjdlNTkyNmI4NmE4Yjk4MzE1NDg4ODZmNjQ3YWNhMCZjdD1n/LYd7VuYqXokv20CaEG/giphy.gif',
'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGMzMzE5MjM4NzUxNjc4NDU5YTdhYjM3NGFlZWY3ZWZmMDM1MDRjNSZjdD1n/fAT2Db0j0Mblu/giphy.gif',
'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjMzYjdjYzk1ZjdlMTdhNjFhMmEzMmFiYTQ2YmE0NDUxMGQ2NTQwMCZjdD1n/hTgmFytUwwHLaMahU1/giphy.gif',
'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWIwYTRkMDRjNzZiMGYxOTY5ZjY3MDM1ZTJlZTFmNWRiY2U4ODRiZiZjdD1n/6bAZXey5wNzBC/giphy.gif',
'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzA3NTljZDI4YjZjODliNWQ1ZWYzMjliNzZkYmU2NTA1MmZjMzljZSZjdD1n/12m6M9cySmlph6/giphy.gif',
'https://media4.giphy.com/media/l49FiX2pvMPPmCfSw/giphy.gif?cid=ecf05e47zicvjyetjoxhe2z6zuq6nbiji6ehy3jr6d20evlg&rid=giphy.gif&ct=g',
'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTFmZGUyY2I3NGI2YWE0YTIwMzFkYmQ0OTA5MmRkMDI3ZjUwYzA4YyZjdD1n/8vQSQ3cNXuDGo/giphy.gif',
'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDg5MWQ4ZjYzNGM1YWMzZWYyOTg0ZTgyMDQzNmFlMTE2Y2IwOTFlNiZjdD1n/yFQ0ywscgobJK/giphy.gif',
'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTM5YWFjMzExYTI2ZjczYzMzNWJjODg5MjA0YzhlMWI5YjA2YjdkNCZjdD1n/ND6xkVPaj8tHO/giphy.gif',
'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDYzZDRlYjI4M2Y4ZWFhNWY5NDdhYWYxZTNlZjhkNjIwNjM2NGZmNCZjdD1n/ZlCsLIEg0okec/giphy.gif',
'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTMyYzQ4OGUyZWU1NWI1NTlhNjRkMTc4YWExODdjMWRkZDdjYzc5MCZjdD1n/hzBc3HCFc0icM/giphy.gif',
'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODdkMTlkNzBhNzM3M2U5Mzc2ZWJiM2ZkNTlkNTYyNzc0Mjg4YTdmYyZjdD1n/dT7LBdAZP1Rh6/giphy.gif'
]; // cats images

function change(){
var img = imgsCatsArray[Math.floor(Math.random() * imgsCatsArray.length)];
document.getElementById("cat").src = img;
}


//Function to play random cat audio when clicking on image

var _player = document.getElementById('audio');

var audiosArray = [
    'audios/cat-eating-dry-food.mp3',
    'audios/cat-meow-2.mp3',
    'audios/cat-meow.mp3',
    'audios/shari_meow.mp3',
    'audios/meow_cat-3.mp3',
    'audios/cat.mp3',
    'audios/sleepy-cat-purring-and-meowing.mp3'
  ]; //cat audios


function playAudio() {
    var track = audiosArray[Math.floor(Math.random() * audiosArray.length)];
  
    _player.src = track;
    return _player.play();
  }


//Function to change the button phrase

currentButtonPhrase = 1;
 var buttonPhrasesArray = [
    'Give me another one!',
    'Another?!',
    "I'm not satisfied yet!",
    'I want more cute cats!'
  ]; // Button phrases

  function changeButton(){

    if(currentButtonPhrase == buttonPhrasesArray.length) 
    {
      currentButtonPhrase=0;
    }
    document.getElementById("button").innerHTML=buttonPhrasesArray[currentButtonPhrase]; 
      currentButtonPhrase++; 
  
  }
