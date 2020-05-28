


Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}

function getDates(startDate, stopDate) {
   var dateArray = new Array();
   var currentDate = startDate;
   while (currentDate <= stopDate) {
     dateArray.push(new Date(currentDate).toDateString());
     currentDate = currentDate.addDays(1);
   }
   return dateArray;
 }

var dateArray = getDates(new Date(2020, 0, 1), new Date(2020, 11, 31));
for (i = 0; i < dateArray.length; i ++ ) {
    console.log(dateArray[i] + "\n");
}

function parseDateString(dateString){
  var parsedDateString = dateString.split(" ");
}
