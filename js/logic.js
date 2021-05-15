// Hide gameplay screen
$(document).ready(function () {
    $(".gameplayScreen").hide();
});

// Hide intro screen when button is clicked
$('#startBtn').click(function () {
    $('.introScreen').hide("slow", function () {
        $(".gameplayScreen").show();
    });
});

// Random generator to select from array
let randNum = (Math.floor(Math.random() * 20) + 1);
console.log(randNum);

// Append photo and name to div
if (randNum === 1) {
    $('.appendHere').append(choices[0].name);
    $('.appendHere').append('<img src="assets/images/Tidus.png" />');
} else if (randNum === 2) {
    $('.appendHere').append(choices[1].name);
    $('.appendHere').append('<img src="assets/images/Crypto137.png" />');
} else if (randNum === 3) {
    $('.appendHere').append(choices[2].name);
    $('.appendHere').append('<img src="assets/images/Raz.png" />');
} else if (randNum === 4) {
    $('.appendHere').append(choices[3].name);
    $('.appendHere').append('<img src="assets/images/Isaac Clack.jpg" />');
} else if (randNum === 5) {
    $('.appendHere').append(choices[4].name);
    $('.appendHere').append('<img src="assets/images/Masterchief.png" />');
} else if (randNum === 6) {
    $('.appendHere').append(choices[5].name);
    $('.appendHere').append('<img src="assets/images/Commander Shepard.png" />');
} else if (randNum === 7) {
    $('.appendHere').append(choices[6].name);
    $('.appendHere').append('<img src="assets/images/KaitDiaz.jpg" />');
} else if (randNum === 8) {
    $('.appendHere').append(choices[7].name);
    $('.appendHere').append('<img src="assets/images/Ori.png" />');
} else if (randNum === 9) {
    $('.appendHere').append(choices[8].name);
    $('.appendHere').append('<img src="assets/images/Marianne.png" />');
} else if (randNum === 10) {
    $('.appendHere').append(choices[9].name);
    $('.appendHere').append('<img src="assets/images/Talion.png" />');
} else if (randNum === 11) {
    $('.appendHere').append(choices[10].name);
    $('.appendHere').append('<img src="assets/images/Lucky.png" />');
} else if (randNum === 12) {
    $('.appendHere').append(choices[11].name);
    $('.appendHere').append('<img src="assets/images/JesseFaden.png" />');
} else if (randNum === 13) {
    $('.appendHere').append(choices[12].name);
    $('.appendHere').append('<img src="assets/images/Celeste.png" />');
} else if (randNum === 14) {
    $('.appendHere').append(choices[13].name);
    $('.appendHere').append('<img src="assets/images/Cayde6.jpg" />');
} else if (randNum === 15) {
    $('.appendHere').append(choices[14].name);
    $('.appendHere').append('<img src="assets/images/Alex.jpg" />');
} else if (randNum === 16) {
    $('.appendHere').append(choices[15].name);
    $('.appendHere').append('<img src="assets/images/Batman.jpg" />');
} else if (randNum === 17) {
    $('.appendHere').append(choices[16].name);
    $('.appendHere').append('<img src="assets/images/Goat.jpg" />');
} else if (randNum === 18) {
    $('.appendHere').append(choices[17].name);
    $('.appendHere').append('<img src="assets/images/2B.jpg" />');
} else if (randNum === 19) {
    $('.appendHere').append(choices[18].name);
    $('.appendHere').append('<img src="assets/images/TheBeheaded.jpg" />');
} else if (randNum === 20) {
    $('.appendHere').append(choices[19].name);
    $('.appendHere').append('<img src="assets/images/Will.jpg" />');
}
