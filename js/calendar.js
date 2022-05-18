function leapCheck(year)
{
  return ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0)));
}
function printCalendar()
{
  data = new Date();

  var year = data.getYear();
  if (year < 1000) year = 2000 + year - 100;

  var month = data.getMonth() + 1;
  var day = data.getDay();
  var date = data.getDate();

  var tempDate = new Date(year, month - 1, 1);
  var firstDay = tempDate.getDay();

  if(day == 0) day = 7;
  if(firstDay == 0) firstDay = 7;

  switch(month){
    case 1 : monthName = "January";
             noOfDays = 31;
             break;
    case 2 : monthName = "February";
             noOfDays = leapCheck(year)?29:28;
             break;
    case 3 : monthName = "March";
             noOfDays = 31;
             break;
    case 4 : monthName = "April";
             noOfDays = 30;
             break;
    case 5 : monthName = "May";
             noOfDays = 31;
             break;
    case 6 : monthName = "June";
             noOfDays = 30;
             break;
    case 7 : monthName = "July";
             noOfDays = 31;
             break;
    case 8 : monthName = "August";
             noOfDays = 31;
             break;
    case 9 : monthName = "September";
             noOfDays = 30;
             break;
    case 10 : monthName = "October";
             noOfDays = 31;
             break;
    case 11 : monthName = "November";
             noOfDays = 30;
             break;
    case 12 : monthName = "December";
             noOfDays = 31;
             break;
  }

  document.write("<TABLE border = 1><TR>");
  document.write("<TD bgcolor='#a5c422' align='center' colspan='7'>");
  document.write(monthName + " " + year);
  document.write("</TD></TR><TR>");

  document.write("<TR>");
  document.write("<TD align='center' bgcolor='pink'>Mo</TD>");
  document.write("<TD align='center' bgcolor='pink'>Tu</TD>");
  document.write("<TD align='center' bgcolor='pink'>We</TD>");
  document.write("<TD align='center' bgcolor='pink'>Th</TD>");
  document.write("<TD align='center' bgcolor='pink'>Fr</TD>");
  document.write("<TD align='center' bgcolor='pink'>Sa</TD>");
  document.write("<TD align='center' bgcolor='pink'>Su</TD>");
  document.write("</TR>");

  var j = noOfDays + firstDay - 1;

  for(var i = 0; i < j; i++){
    if(i < firstDay - 1){
      document.write("<TD bgcolor='white'></TD>");
      continue;
    }
    if((i % 7) == 0){
      document.write("</TR><TR>");
    }
    if((i - firstDay + 2) == date){
      color = "#a5c422";
    }
    else{
      color = "#f9f9f9";
    }
    document.write("<TD bgcolor='" + color + "' align='center'>");
    document.write(i - firstDay + 2);
    document.write("</TD>");
  }
  document.write("</TR></TABLE>");
}