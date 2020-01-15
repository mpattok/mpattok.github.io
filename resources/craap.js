var element = `<h1>The CRAAP Test</h1>
Source: ` + citation + `<br> URL + ` url + `
<table><tbody>
<tr><th style="text-align: left; vertical-align: text-top;"><h3>Currency:</h3></th><th style="text-align: right; vertical-align: text-top;"><span style="border: 1px solid black">`+currscore+`</th></tr>
<tr><td><ul>
<li>When was the information published or posted? <span style="color: red">`+currone+`</span></li>
<li>Has the information been revised or updated? <span style="color: red">`+currtwo+`</span></li>
<li>Is the information(also links) current or out of date for your topic? <span style="color: red">`+currthree+`</span></li></ul></td>
<td></td></tr>
<tr><th style="text-align: left; vertical-align: text-top;"><h3>Relevance:</h3></th><th style="text-align: right; vertical-align: text-top;"><span style="border: 1px solid black">`+relscore+`</th></tr>
<tr><td><ul>
<li>Does the information relate to your topic or answer your question? <span style="color: red">`+relone+`</span></ul></li></td>
<td></td></tr>
<tr><th style="text-align: left; vertical-align: text-top;"><h3>Authority:</h3></th><th style="text-align: right; vertical-align: text-top;"><span style="border: 1px solid black">`+authscore+`</th></tr>
<tr><td><ul>
<li>Who is the author/publisher/source/sponsor? <span style="color: red">`+authone+`</span></li>
<li>Are the author's organizational affiliations given? If so, are they appropriate? (Does the URL reveal anything about the author or source?) <span style="color: red">`+authtwo+`</span></li>
<li>What are the author's qualifications to write about the topic? <span style="color: red">`+auththree+`</span></li>
<li>Is there contact information, such as a publisher or email address? <span style="color: red">`+authfour+`</span></li></ul></td>
<td></td></tr>
<tr><th style="text-align: left; vertical-align: text-top;"><h3>Accuracy:</h3></th><th style="text-align: right; vertical-align: text-top;"><span style="border: 1px solid black">`+accscore+`</th></tr>
<tr><td><ul>
<li>Is the information supported by evidence? <span style="color: red">`+accone+`</span></li>
<li>Has the information been reviewed or refereed? <span style="color: red">`+acctwo+`</span></li>
<li>Can you verify any of the information in another source? <span style="color: red">`+accthree+`</span></li>
<li>Does the language or tone seem unbiased and is it free of emotion? <span style="color: red">`+accfour+`</span></li>
<li>Are there spelling or grammar errors, do links work? <span style="color: red">`+accfive+`</span></li></ul></td>
<td></td></tr>
<tr><th style="text-align: left; vertical-align: text-top;"><h3>Purpose:</h3></th><th style="text-align: right; vertical-align: text-top;"><span style="border: 1px solid black">`+purpscore+`</th></tr>
<tr><td><ul>
<li>What is the purpose of the information? <span style="color: red">`+purpone+`</span></li>
<li>Do the authors/sponsors make their intentions or purpose clear? <span style="color: red">`+purptwo+`</span></li>
<li>Is the information a fact, an opinion, or propaganda? <span style="color: red">`+purpthree+`</span></li>
<li>Are there political, ideological, cultural, religious, institutional, or personal biases> <span style="color: red">`+purpfour+`</span></li></ul></td>
<td></td></tr>
<tr><th style="text-align: left; vertical-align: text-top;"><h3>Total CRAAP:</h3></th><th style="text-align: right; vertical-align: text-top;"><span style="border: 1px solid black">`+totscore+`</th></tr>
<tr><td colspan="2">45 - 50 Excellent | 40 - 44 Good | 35 - 39 Average | 30 - 34 Borderline Acceptable | Below 30 Unacceptable</td></tr></tbody></table>`;
crapp.innerHTML = element;
