function lhrCount(){
var lhr = moment.tz("2001-10-10T15:42", "Asia/Makassar");
var lhrCalc = lhr.fromNow();
document.getElementById("counter").innerHTML = "Reinhart is " + moment.tz("2001-10-10T15:45", "Asia/Makassar").fromNow(true) + " old.";
}
