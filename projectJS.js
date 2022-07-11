document.getElementById('myButton').addEventListener('click', getInfo)
function getInfo() {
    myName = document.getElementById('myName').value;
    myCity = document.getElementById('myCity').value;
    myState = document.getElementById('myState').value;
    myZIP = document.getElementById('myZIP').value;
    myEmail = document.getElementById('myEmail').value; 
    mySocials = document.getElementById('mySocials').value;
    myPortfolio = document.getElementById('myPortfolio').value;
    myNumber = document.getElementById('myNumber').value;
    mySkill1 = document.getElementById('mySkill1').value;
    mySkill2 = document.getElementById('mySkill2').value;
    mySkill3 = document.getElementById('mySkill3').value;
    myEducation= document.getElementById('myEducation').value;
    myPosition1 = document.getElementById('myPositionOne').value;
    myPosition2 = document.getElementById('myPositionTwo').value;
    myPosition3 = document.getElementById('myPositionThree').value;
    startDate1 = document.getElementById('startDate1').value;
    endDate1 = document.getElementById('endDate1').value;
    workExperience1 = document.getElementById('workExperience1').value;
    startDate2 = document.getElementById('startDate2').value;
    endDate2 = document.getElementById('endDate2').value;
    workExperience2 = document.getElementById('workExperience2').value;
    startDate3 = document.getElementById('startDate3').value;
    endDate3 = document.getElementById('endDate3').value;
    workExperience3 = document.getElementById('workExperience3').value;
    myReferences = document.getElementById('myReferences').value;
    myText = ("<html>\n<head><link rel='stylesheet' href='resumeStyle.css'><title>Your Resume</title></head><body>\n");
    myText += ("<h1 id='myName'>" + myName + "</h1>\n");
    myText += ("<h4 id='myCity'>" + myCity + ", " + myState + " " + myZIP + "</h4>\n");
    myText += ("<h4 id='myEmail'>" + myEmail + " " + myNumber + "</h4>\n");
    myText += ("<h4 id='mySocials'>" + mySocials + "</h4>");
    myText += ("<h4 id='myPortfolio'>" + myPortfolio + "</h4>\n");
    myText += ("<h2 id='techToolbox'>Technical Toolbox</h2>\n");
    myText += ("<p id='mySkill1'>" + mySkill1 + "</p>\n");
    myText += ("<p id='mySkill2'>" + mySkill2 + "</p>\n");
    myText += ("<p id='mySkill3'>" + mySkill3 + "</p>\n");
    myText += ("<h2 id='education'>Education</h2>\n");
    myText += ("<p id= 'myEducation'>" + myEducation + "</p>\n");
    myText += ("<h2 id='work'>Work Experience</h2>\n");
    myText += ("<h4 id='position1'>" + myPosition1 + "</h4>\n");
    myText += ("<p id='date1'>" + startDate1 + "-" + endDate1 + "</p>\n");
    myText += ("<p id='experience1'>" + workExperience1 + "</p>\n");
    myText += ("<h4 id='position2'>" + myPosition2 + "</h4>\n");
    myText += ("<p id='date2'>" + startDate2 + "-" + endDate2 + "</p>\n");
    myText += ("<p id='experience2'>" + workExperience2 + "</p>\n");
    myText += ("<h4 id='position3'>" + myPosition3 + "</p>\n");
    myText += ("<p id='date3'>" + startDate3 + "-" + endDate3 + "</p>\n");
    myText += ("<p id='experience3'>" + workExperience3 + "</p>\n");
    myText += ("<h2 id='references'>Professional References</h2>\n");
    myText += ("<p id='myreferences'>" + myReferences + "</p>\n");
    function checkEmail() {
        if (myEmail == "") {
            alert("A valid email address must be entered to continue.");
            return false;
       }
        }    
        if (checkEmail() == false) {
            return;
        }
    checkEmail();
    myWindow = window.open('about:blank', 'myPop', 'width=400, height=200, left=200, right=200')
    myWindow.document.write(myText);

}
