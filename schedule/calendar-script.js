var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function parseCode(str) {
  var out = [0,0,0];
  for(var i = 0; i < 2; i++) {
    out[i] = parseInt(str.substring(0, str.indexOf("-")));
    str = str.substring(str.indexOf("-") + 1, str.length);
  }
  out[i] = parseInt(str);
  return out;
}

for(var i = 0; i < events.length; i++) {
  if(events[i][2][0] != "0") {
    var repeat = events[i][2];
    var n = parseInt(repeat.substring(0, repeat.indexOf("-")));
    repeat = repeat.substring(repeat.indexOf("-") + 1, repeat.length);
    var dMDY = parseCode(repeat);
    var MDY1 = parseCode(events[i][0]);
    for(var j = 0; j < n; j++) {
      var MDY2 = [MDY1[0] + j * dMDY[0], MDY1[1] + j * dMDY[1], MDY1[2] + j * dMDY[2]];
      while(MDY2[0] > 12) {
        MDY2[0] -= 12;
        MDY2[2]++;
      }
      while(MDY2[1] > monthLengths[MDY2[0]-1] + (MDY2[0] == 2 && Number.isInteger(MDY2[2] / 4) ? 1 : 0) ) {
        MDY2[1] -= monthLengths[MDY2[0]-1] + (MDY2[0] == 2 && Number.isInteger(MDY2[2] / 4) ? 1 : 0);
        MDY2[0]++;
        if(MDY2[0] == 13) {
          MDY2[0] = 1;
          MDY2[2]++;
        }
      }
      events.push([MDY2[0] + "-" + MDY2[1] + "-" + MDY2[2], events[i][1], "0"]);
    }
    events.splice(i,1);
    i--;
  }
}

document.head.innerHTML = `
<style>
.calendarClass table {
  table-layout: fixed;
  width: 100%;
}
.bordered {
  border: 1px solid black;
  width: 14.2857%;
  text-align: left;
  vertical-align: text-top;
  padding: .3em;
}
td.bordered {
  height: 5em;
}
th.bordered {
  text-align: center;
}
table, th, td {
  border-collapse: collapse;
}
@media only screen {
  .today {
    border: 2px solid red !important;
  }
  .bordered {
    border: 1px solid black;
  }
  .arrow {
    cursor: pointer;
  }
}
@media only print {
  .today {
    border: 2px solid black !important;
  }
  .bordered {
    border: 2px solid black;
  }
  .arrow {
    color: transparent;
  }
}
</style>
` + document.head.innerHTML;

var date = new Date();
function makeCalendar(calNum) {
  var calDiv = document.getElementsByClassName("calendarClass")[calNum];
  var initMonth = true;
  var startMonth = calDiv.getElementsByClassName("calMonth")[0];
  if(startMonth != undefined) {
    if(parseInt(startMonth.innerHTML) > 0 && parseInt(startMonth.innerHTML) < 13) {
      initMonth = false;
    }
  }
  if(initMonth) {
    var calMonth = document.createElement("div");
    calMonth.className = "calMonth";
    calMonth.style.display = "none";
    calMonth.innerHTML = date.getMonth() + 1;
    calDiv.appendChild(calMonth);
  }
  var initYear = true;
  var startYear = calDiv.getElementsByClassName("calYear")[0];
  if(startYear != undefined) {
    if(parseInt(startYear.innerHTML) > -271815) {
      initYear = false;
    }
  }
  if(initYear) {
    var calYear = document.createElement("div");
    calYear.className = "calYear";
    calYear.style.display = "none";
    calYear.innerHTML = date.getFullYear();
    calDiv.appendChild(calYear);
  }
  var calMonth = calDiv.getElementsByClassName("calMonth")[0];
  var calYear = calDiv.getElementsByClassName("calYear")[0];
  calDiv.innerHTML = "";
  calDiv.appendChild(calMonth);
  calDiv.appendChild(calYear);
  var position = [parseInt(calDiv.getElementsByClassName("calMonth")[0].innerHTML) - 1, parseInt(calDiv.getElementsByClassName("calYear")[0].innerHTML)];
  var calendar = `
<table width='100%'>
<tbody>
<tr>
<td colspan='7' style='font-size: 2em; text-align: center; padding: 1em;'>
<span style='float: left; padding-left: 2em;' class='arrow' onclick='move(` + calNum + `, -1)'><<</span>
<b>` + months[position[0]] + ` ` + (position[1] > 0 ? position[1] : Math.abs(position[1]) + " B.C.E.") + `</b>
<span style='float: right; padding-right: 2em;' class='arrow' onclick='move(` + calNum + `, 1)'>>></span>
</td>
</tr>
<tr>
<th class="bordered">Sunday</th>
<th class="bordered">Monday</th>
<th class="bordered">Tuesday</th>
<th class="bordered">Wednesday</th>
<th class="bordered">Thursday</th>
<th class="bordered">Friday</th>
<th class="bordered">Saturday</th>
</tr>
`;
  var dayOfWeek = (new Date(position[1], position[0], 1)).getDay();
  for(var day = 1; day <= monthLengths[position[0]] + (position[0] == 1 && Number.isInteger(position[1]/4) ? 1 : 0); day++) {
    if(day == 1 && dayOfWeek != 0) {
      calendar += `
<tr>
<td class='bordered' colspan='` + dayOfWeek + `' style='color: transparent'>.</td>
`;
    }
    if(dayOfWeek == 0) {calendar += `<tr>`;}
    calendar += `<td class='bordered ` + (date.getDate()==day && date.getMonth()==position[0] && date.getFullYear()==position[1] ? `today` : ``) + `'>` + day;
    var dateCode = (position[0] + 1) + "-" + day.toString() + "-" + position[1];
    for(var i = 0; i < events.length; i++) {
      if(dateCode == events[i][0]) {
        calendar += `<p style='padding: 0; margin: 0; margin-left: 10px; text-indent: -10px; padding-bottom: 5px;'>` + events[i][1] + `</p>`;
      }
    }
    calendar += `</td>`;
    dayOfWeek++;
    if(dayOfWeek == 7) {
      calendar += `</tr>`;
      dayOfWeek = 0;
    }
  }
  if(dayOfWeek != 0) {
    calendar += `</tr>`;
  }
  calDiv.innerHTML += calendar + `
</tbody>
</table>
`;
}

function move(calNum, direction) {
  var calDiv = document.getElementsByClassName("calendarClass")[calNum];
  var position = [parseInt(calDiv.getElementsByClassName("calMonth")[0].innerHTML) - 1, parseInt(calDiv.getElementsByClassName("calYear")[0].innerHTML)];
  position[0] += direction;
  if(position[0] == -1) {
    position[0] = 11;
    position[1]--;
  }
  if(position[0] == 12) {
    position[0] = 0;
    position[1]++;
  }
  calDiv.getElementsByClassName("calMonth")[0].innerHTML = position[0] + 1;
  calDiv.getElementsByClassName("calYear")[0].innerHTML = position[1];
  makeCalendar(calNum);
}

var calendars = document.getElementsByClassName("calendarClass");
for(var i = 0; i < calendars.length; i++) {
  makeCalendar(i);
}