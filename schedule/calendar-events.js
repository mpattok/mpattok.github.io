/*
  format: [["DATE CODE","EVENT INFO",TRUE/FALSE],...]
  TRUE/FALSE refers to whether or not an event goes on list schedule (joke items like "Wish Matt a happy birthday :)" would have false for that value)
  format: [["DATE CODE", "EVENT INFO", "REPEAT CODE"],...]
*/

var may25 = `<ul style='margin:0;padding:0;padding-left:15px'><li>CLP Exam 9:30, leave 8 AM. Montcalm Community College, 1325 Yellow Jacket Dr, Ash TLC Building, Greenville, MI</li><li>Graduation Practice on field 1:30 PM</li><li>Honors Night PAC 7 PM</li></ul>`;

var parking = "Ace Parking 6:30-7:30 PM";
var bovard = "Bovard Scholars online 12PM-";
var summer = "Summer School 8AM-12PM";

var events = [

  ["10-12-2023", "Fall Break", "0"],
  ["10-16-2023", "Classes Resume", "0"],
  ["10-30-2023", "Advance Registration Starts", "0"],
  ["11-13-2023", "Advance Registration Deadline", "0"],
  ["11-23-2023", "Thanksgiving Break", "0"],
  ["11-27-2023", "Classes Resume", "0"],
  ["11-22-2023", "Winter Break", "0"],
  ["1-18-2023", "Classes Resume", "0"],
  ["3-2-2023", "Spring Break", "0"],
  ["3-11-2023", "Classes Resume", "0"],
  ["3-25-2023", "Advance Registration Starts", "0"],
  ["4-8-2023", "Advance Registration Deadline", "0"],
  ["5-15-2023", "Summer Break Begins", "0"],



  
  ["5-6-2021", "Computer Science A (12 PM)", "0"],
  ["5-10-2021", "Macroeconomics (12 PM)", "0"],
  ["5-12-2021", "Language (8 AM)", "0"],
  ["5-12-2021", "Microeconomics (12 PM)", "0"],
  ["5-14-2021", "Biology (8 AM)", "0"],
  ["5-17-2021", "Computer Science Principles (8 AM)", "0"],
  ["5-17-2021", "Statistics (12 PM)", "0"],
  ["5-20-2021", "<p style='text-indent: -12px; margin: 0; padding: 0; margin-left: 12px'><b>Digital Portfolios Due 11:59 PM EST:</b></p><p style='text-indent: -12px; margin: 0; padding: 0; margin-left: 12px'>Computer Science Principles</p><p style='margin: 0; padding: 0'>Research</p>", "0"],
  ["7-6-2021", summer, "6-0-7-0"],
  ["7-7-2021", summer, "6-0-7-0"],
  ["7-8-2021", summer, "6-0-7-0"],
  ["7-9-2021", summer, "0"],
  ["7-9-2021", "Church Breakfast Training 3PM", "0"],
  ["7-10-2021", "Church Breakfast 7:30-9AM", "10-0-7-0"],
  ["7-12-2021", summer, "5-0-7-0"],
  ["7-14-2021", "Dentist 11AM", "1-0-0-0"],
  ["7-12-2021", bovard + "8PM", "5-0-1-0"],
  ["7-19-2021", bovard + "8PM", "5-0-1-0"],
  ["7-24-2021", bovard + "4PM", "1-0-0-0"],
  ["7-26-2021", bovard + "8PM", "5-0-1-0"],
  ["6-2-2021", parking, "6-0-7-0"],
  ["6-14-2021", "2nd COVID vaccine dose at 6 PM at 330 W Woodlawn Ave", "0"],
  ["7-21-2021", "AP Scores Released", "0"],
  ["8-4-2021", parking, "4-0-7-0"],
  ["8-13-2021", "Driving Test 1PM @ 535 W Woodlawn Ave", "0"],
  ["8-23-2021", "School Starts", "0"],
  ["11-11-2003", "Matt's birthday", "80-0-0-1"],
  ["5-3-2022", "AP Psychology (12 PM)", "0"],
  ["5-4-2022", "AP English Literature and Composition (8 AM)", "0"],
  ["5-6-2022", "AP United States History (8 AM)", "0"],
  ["5-10-2022", "AP Physics C: Mechanics (12 PM)<br>AP Physics C: Electricity and Magnetism (2 PM)", "0"],
  ["5-11-2022", "AP Spanish Language and Culture (8 AM)", "0"],
  ["5-25-2022", may25, "0"],
  ["5-26-2022", "Graduation 7PM Field, Senior Party After", "0"],
  ["5-1-2023", "CIS 1210 Final<br>3PM - DRLB A1", "0"],
  ["5-2-2023", "PHIL 1433 Final<br>9AM - STIT B6", "0"],
  ["5-8-2023", "CIS 2400 Final<br>9AM - CHEM 102", "0"],
  ["5-8-2023", "STAT 4300 Final<br>3PM - SHDH 1206 or 350", "0"]
];
