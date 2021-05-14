$(document).ready(function() {
    $(".gameplayScreen").hide();
 });

$('#startBtn').click(function() {
    $('.introScreen').hide("slow", function() {
        alert("Hidden sucessfully");
        $(".gameplayScreen").show();
    });
});
