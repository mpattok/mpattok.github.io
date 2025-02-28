/*
  format: [["DATE CODE","EVENT INFO",TRUE/FALSE],...]
  TRUE/FALSE refers to whether or not an event goes on list schedule (joke items like "Wish Matt a happy birthday :)" would have false for that value)
  format: [["DATE CODE", "EVENT INFO", "REPEAT CODE"],...]
  date code format: M-D-Y
  repeat code format: COUNT-MONTHS-DAYS-YEARS (the event happens COUNT times, with the specified gap)
*/

const may25 = `<ul style='margin:0;padding:0;padding-left:15px'><li>CLP Exam 9:30, leave 8 AM. Montcalm Community College, 1325 Yellow Jacket Dr, Ash TLC Building, Greenville, MI</li><li>Graduation Practice on field 1:30 PM</li><li>Honors Night PAC 7 PM</li></ul>`;

const parking = "Ace Parking 6:30-7:30 PM";
const bovard = "Bovard Scholars online 12PM-";
const summer = "Summer School 8AM-12PM";

const hw = (course, due) => "<b>" + course + " </b> HW due " + due;
const exam = (course, time, location) => "<b>" + course + " Exam</b><br>" + time + " " + location;

var events = [

  ["3-5-2025", exam("CIS 4190", "In class", ""), "0"],
  ["3-4-2025", exam("CIS 5450", "In class", ""), "0"],
  ["3-6-2025", exam("CIS 4521", "In class", ""), "0"],
  ["3-4-2025", exam("PHIL 1710", "In class", ""), "0"],

  ["1-29-2025", hw("CIS 4190", "8PM"), "3-0-14-0"],
  ["3-3-2025", hw("CIS 4190", "8PM"), "0"],
  ["3-26-2025", hw("CIS 4190", "8PM"), "2-0-7-0"],
  ["4-16-2025", hw("CIS 4190", "8PM"), "2-0-7-0"],

  ["1-17-2025", hw("PHIL 1710", "8:30 AM"), "7-0-7-0"],
  ["3-21-2025", hw("PHIL 1710", "8:30 AM"), "4-0-7-0"],
  ["4-22-2025", hw("PHIL 1710", "8:30 AM"), "2-0-3-0"],

  ["12-12-2024", "CIS 5000 Final<br>12-2PM LRSM AUD", "0"],
  ["12-18-2024", "ECON 4430 Final<br>12-2PM ANNS 111", "0"],

  ["9-3-2024", "Labor Day (no class)", "0"],
  ["10-3-2024", "Fall Break", "4-0-1-0"],
  ["10-28-2024", "Advance Registration Opens", "0"],
  ["11-11-2024", "Advance Registration Ends", "0"],
  ["11-26-2024", "Thursday classes", "0"],
  ["11-27-2024", "Friday classes", "0"],
  ["11-28-2024", "Thanksgiving Break", "4-0-1-0"],
  ["12-9-2024", "Last day of class", "0"],

  ["1-15-2025", "First day of class", "0"],
  ["1-20-2025", "MLK Jr Day (no class)", "0"],
  ["3-8-2025", "Spring Break", "9-0-1-0"],
  ["3-24-2025", "Advance Registration Opens", "0"],
  ["4-7-2025", "Advance Registration Ends", "0"],
  ["4-30-2025", "Last day of class", "0"],

  ["5-10-2024", "CIS 3200 Final Exam<br>9-11AM<br>CHEM 102 or CHEM 109", "0"],
  ["5-9-2024", "CIS 4710 Final Exam <br>12-2PM<br>LEVH 101 or CHEM 102", "0"],
  ["5-13-2024", "ESE 1120 Final Exam<br>12-2PM<br>CHEM 102", "0"],
  ["5-8-2024", "MATH 3130 Final Exam<br>6-8PM<br>ANNS 110", "0"],
  
  ["4-3-2024", "CIS 3200 Exam 2", "0"],
  ["3-28-2024", "ESE 1120 Quiz 2", "0"],
  

  ["10-12-2023", "Fall Break", "0"],
  ["10-16-2023", "Classes Resume", "0"],
  ["10-30-2023", "Advance Registration Starts", "0"],
  ["11-13-2023", "Advance Registration Deadline", "0"],
  ["11-23-2023", "Thanksgiving Break", "0"],
  ["11-27-2023", "Classes Resume", "0"],
  ["12-22-2023", "Winter Break", "0"],
  ["1-18-2024", "Classes Resume", "0"],
  ["3-2-2024", "Spring Break", "0"],
  ["3-11-2024", "Classes Resume", "0"],
  ["3-25-2024", "Advance Registration Starts", "0"],
  ["4-8-2024", "Advance Registration Deadline", "0"],
  ["5-15-2024", "Summer Break Begins", "0"],



  
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
