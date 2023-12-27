
const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
const level = document.querySelector('.level');
var url = new URL(window.location.href);

var urlParams = new URLSearchParams(window.location.search);
let paramUserID = urlParams.get('Email');
let ParamOrgID= urlParams.get('OrgID');
 let M2OstAssesmentID=0;
let id_game=urlParams.get('idgame');
let gameAssesmentId=urlParams.get('gameassid');
let currentQuestionIndex=0;
let UID=[];


const QuestionList=
    [
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 79,
          "Id_Assessment": 14,
          "Assessment_Question": "1.भारत के वर्तमान सीईओ कौन हैं?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 280,
              "Id_Assessment_question": 79,
              "Answer_Description": "a)गुंजन शाहrn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946587000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 281,
              "Id_Assessment_question": 79,
              "Answer_Description": "b)संदीप कटारिया",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946621000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 282,
              "Id_Assessment_question": 79,
              "Answer_Description": "ग) क्रिस किर्क",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946648000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 283,
              "Id_Assessment_question": 79,
              "Answer_Description": "d)इनमें से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946673000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 80,
          "Id_Assessment": 14,
          "Assessment_Question": "3.बाटा इंडिया लिमिटेड (BIL) की शुरुआत हुई:rn",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 288,
              "Id_Assessment_question": 80,
              "Answer_Description": "ए)1894",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947726000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 289,
              "Id_Assessment_question": 80,
              "Answer_Description": "बी)1931",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947748000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 290,
              "Id_Assessment_question": 80,
              "Answer_Description": "ग)1936",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947769000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 291,
              "Id_Assessment_question": 80,
              "Answer_Description": "घ) उपरोक्त में से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947796000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 81,
          "Id_Assessment": 14,
          "Assessment_Question": "4. भारत में 3 विनिर्माण इकाइयों के नाम बताइए।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 292,
              "Id_Assessment_question": 81,
              "Answer_Description": "ए) बाटा नगर,",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947821000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 293,
              "Id_Assessment_question": 81,
              "Answer_Description": "b) बाटा गंज",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947844000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 294,
              "Id_Assessment_question": 81,
              "Answer_Description": "c) बता शतक",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947866000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 295,
              "Id_Assessment_question": 81,
              "Answer_Description": "D। उपरोक्त सभी",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947885000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 82,
          "Id_Assessment": 14,
          "Assessment_Question": "5. बाटा कंपनी की दुनिया भर में __ उत्पादन इकाई है।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 296,
              "Id_Assessment_question": 82,
              "Answer_Description": "ए) 32",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947915000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 297,
              "Id_Assessment_question": 82,
              "Answer_Description": "बी)34",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947936000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 298,
              "Id_Assessment_question": 82,
              "Answer_Description": "ग) 26",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947961000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 299,
              "Id_Assessment_question": 82,
              "Answer_Description": "घ) 26",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947977000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 83,
          "Id_Assessment": 14,
          "Assessment_Question": "6.BC की उपस्थिति __ से अधिक देशों में है।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 300,
              "Id_Assessment_question": 83,
              "Answer_Description": "ए)50+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947998000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 301,
              "Id_Assessment_question": 83,
              "Answer_Description": "बी)70+",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948021000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 302,
              "Id_Assessment_question": 83,
              "Answer_Description": "ग)80+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948064000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 303,
              "Id_Assessment_question": 83,
              "Answer_Description": "घ)100+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948092000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 84,
          "Id_Assessment": 14,
          "Assessment_Question": "7.BCP का पूर्ण रूप क्या है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 304,
              "Id_Assessment_question": 84,
              "Answer_Description": "a) बाटा चैट प्रोग्राम",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948118000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 305,
              "Id_Assessment_question": 84,
              "Answer_Description": "b)बाटा चिल्ड्रेन प्रोग्राम",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948144000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 306,
              "Id_Assessment_question": 84,
              "Answer_Description": "c) बाटा कॉर्पोरेशन प्रोग्राम",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948166000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 307,
              "Id_Assessment_question": 84,
              "Answer_Description": "d)बाटा कंपनी प्रोफाइलrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948192000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 85,
          "Id_Assessment": 14,
          "Assessment_Question": "rnrn8)बाटा कंपनी की शुरुआत कब हुई?rn",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 308,
              "Id_Assessment_question": 85,
              "Answer_Description": "1894rn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948219000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 309,
              "Id_Assessment_question": 85,
              "Answer_Description": "बी) 1856",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948240000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 310,
              "Id_Assessment_question": 85,
              "Answer_Description": "ग) 1908",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948263000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 311,
              "Id_Assessment_question": 85,
              "Answer_Description": "घ) 1915",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948289000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 86,
          "Id_Assessment": 14,
          "Assessment_Question": "9. BIL के भारत में __ संख्या में स्टोर हैं।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 312,
              "Id_Assessment_question": 86,
              "Answer_Description": "ए) 1558",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948324000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 313,
              "Id_Assessment_question": 86,
              "Answer_Description": "बी) 1200",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948340000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 314,
              "Id_Assessment_question": 86,
              "Answer_Description": "ग) 1100",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948370000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 315,
              "Id_Assessment_question": 86,
              "Answer_Description": "घ) 5000",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948416000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 87,
          "Id_Assessment": 14,
          "Assessment_Question": "10.कंप्यूटर सीखना विज्ञान प्रयोगशालाओं तक पहुंच किस कार्यक्रम के अंतर्गत आता है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 316,
              "Id_Assessment_question": 87,
              "Answer_Description": "क) गर्व के साथ आगे बढ़ें।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948447000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 317,
              "Id_Assessment_question": 87,
              "Answer_Description": "ख) नन्हीं कली।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948467000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 318,
              "Id_Assessment_question": 87,
              "Answer_Description": "ग) एसटीईएम कार्यक्रम।",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948492000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 319,
              "Id_Assessment_question": 87,
              "Answer_Description": "घ) हैप्पी फीट।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948517000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 88,
          "Id_Assessment": 14,
          "Assessment_Question": "2.BIL का पूर्ण रूप क्या है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 284,
              "Id_Assessment_question": 88,
              "Answer_Description": "a) बाटा इंडिया लिमिटrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947631000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 285,
              "Id_Assessment_question": 88,
              "Answer_Description": "b) बाटा इंडियन लिमिटेडrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947650000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 286,
              "Id_Assessment_question": 88,
              "Answer_Description": "c) बाटा इंडिया लिमिटेडrn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947675000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 287,
              "Id_Assessment_question": 88,
              "Answer_Description": "d)इनमें से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947701000)",
              "Id_CmsUser": 21
            }
          ]
        }

]


let gameStart = new Audio();
let gameOver = new Audio();
// Get assesment Data
// https://www.playtolearn.in/NGage-Split/api/GetAssessmentDataList?OrgID=1&UID=6483
//Save Assessment API
//https://www.playtolearn.in/Assessment/AssessmentList/SaveAssessment




//url https://www.playtolearn.in/Assessment/?userid=@userid&M2ostAssessmentId=@asid&idgame=10&gameassid
async function getIdUser(url=`https://www.playtolearn.in/Mini_games_beta/api/UserDetail?OrgId=${ParamOrgID}&Email=${paramUserID}`){
    try{
        const response= await fetch(url, { method: 'GET' });
        const encryptedData = await response.json();
        const IdUser=JSON.parse(encryptedData);
        console.log(encryptedData);
        UID.push(IdUser);
        console.log(UID[0].Id_User);
        getDetails();
        return encryptedData;
       
    }
    catch (error) {
        console.error('Fetch error:', error.message);
        throw error;
      }
}

async function getDetails(url =`https://www.playtolearn.in/Mini_games_beta/api/GetAssessmentDataList?OrgID=${ParamOrgID}&UID=${UID[0].Id_User}&M2ostAssessmentId=0&idgame=${id_game}&gameassid=${gameAssesmentId}`) {
  try {
    const response = await fetch(url, { method: 'GET' });

    // if (!response.ok) {
    //   throw new Error(`Network response was not ok, status code: ${response.status}`);
    // }

    const encryptedData = await response.json();
    QuestionList=JSON.parse(encryptedData);
    console.log('ResponseData',QuestionList);

     // Assuming the response is the encrypted data
    

    
    return encryptedData;
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
}


function initializePage() {
  try {
    getIdUser();
   
    
  } catch (error) {
    // console.error('Error during initialization:', error.message);
  }
}

document.addEventListener('DOMContentLoaded', initializePage);


let getResponse;




  async function saveAssessment(data) {
    let postData = data;
   
  
    const baseUrl = 'https://www.playtolearn.in/';
    const endpoint = 'Mini_games_beta/api/assessmentdetailuserlog';
    const url = baseUrl + endpoint;
    
    
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required
      },
      body: JSON.stringify(postData),
    });
  
    // if (!response.ok) {
    //   throw new Error(`Network response was not ok, status code: ${response.status}`);
    // }
    console.log('response',response);
    const responseData = await response.json();

   
   
    return responseData;
  }
  async function saveAssessmentMasterLog(data) {
    let postData = data;
    console.log( JSON.stringify(postData));
   
  
    const baseUrl = 'https://www.playtolearn.in/';
    const endpoint = 'Mini_games_beta/api/gameusermasterlog';
    const url = baseUrl + endpoint;
    
    
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required
      },
      body: JSON.stringify(postData),
    });

  
    // if (!response.ok) {
    // throw new Error(`Network response was not ok, status code: ${response.status}`);
      
    // }
//   console.log('response',response);
   const responseData = await response.json();
    
   
    return responseData;
  }
  
// Usage example:
// Assuming 'assessmentData' contains the data you want to send





gameStart.src = "assets/audio/game_theme.mp3";
gameOver.src = "assets/audio/gameOver_theme.mp3";


const levelSpeed = {easy: 10};


let keys = {
    // ArrowUp: false,
    // ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}
let player = { speed: 7, score: 0 };
level.addEventListener('click', (e)=> {
    player.speed = levelSpeed[e.target.id];
});



const startButton = document.getElementById('easy'); // Assuming the button has the id "easy"

startButton.addEventListener('click', () => {
    // Hide the start screen or perform any necessary actions
    startScreen.classList.add('hide');

    // Start the game
    player.start = true;
    gameStart.play();
    gameStart.loop = true;
    player.score = 0;
    window.requestAnimationFrame(gamePlay);

    // Add road lines, car, and enemy cars
    for (let i = 0; i < 5; i++) {
        let roadLineElement = document.createElement('div');
        roadLineElement.setAttribute('class', 'roadLines');
        roadLineElement.y = (i * 150);
        roadLineElement.style.top = roadLineElement.y + "px";
        gameArea.appendChild(roadLineElement);
    }

    let carElement = document.createElement('div');
    carElement.setAttribute('class', 'car');
    gameArea.appendChild(carElement);

    player.x = carElement.offsetLeft;
    player.y = carElement.offsetTop;

    for (let i = 0; i < 3; i++) {
        let enemyCar = document.createElement('div');
        enemyCar.setAttribute('class', 'enemyCar');
        enemyCar.y = ((i + 1) * 350) * -1;
        enemyCar.style.top = enemyCar.y + "px";
        // enemyCar.style.left = Math.floor(Math.random() * 350) + "px";
        gameArea.appendChild(enemyCar);
    }
});


window.onload = function() {
  showPopup();
};

document.addEventListener('DOMContentLoaded', function() {
  showPopup();
});


function showPopup() {
  popup.classList.remove('hide');
  startScreen.style.filter = 'blur(5px)';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hide');

  // Unblur the start screen
  const startScreen = document.querySelector('.startScreen');
  startScreen.style.filter = 'none';
}




 function showNewPopup() {
        const newPopup = document.getElementById('newPopup');
        newPopup.classList.remove('hide');
        startScreen.style.filter = 'blur(5px)';
    }

    function closeNewPopup() {
        const newPopup = document.getElementById('newPopup');
        newPopup.classList.add('hide');

        // Unblur the start screen
        const startScreen = document.querySelector('.startScreen');
        startScreen.style.filter = 'none';
    }





// function randomColor(){
//     function c(){
//         let hex = Math.floor(Math.random() * 256).toString(16);
//         return ("0"+ String(hex)).substr(-2);
//     }
//     return "#"+c()+c()+c();
// }

let isGamePaused = false;


function onCollision(a, b) {
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();

    if (isGamePaused) {
        return false;
    }

    if (!((aRect.top > bRect.bottom) || (aRect.bottom < bRect.top) ||
        (aRect.right < bRect.left) || (aRect.left > bRect.right))) {
        // Collision detected
        // displayQuestion();
        player.start = false;
        gameStart.pause();

        
      
        return true;
    }
    currentQuestionIndex
    return false;
}
function displayQuestion() {


    
    if (currentQuestionIndex < QuestionList.length) {
        const currentQuestion = QuestionList[currentQuestionIndex];
        displayQuestionInModal(QuestionList[currentQuestionIndex]);

        // getData();
        
        currentQuestionIndex++;
    } else {
        currentQuestionIndex = 0;
        onGameOver();
    }
}



// let totalPercentage = 0;
let rank=0;
let scores=10;
let AssementData=[];
let assessmentObject=[];
let GivenAns;



function displayQuestionInModal(questionObj) {
    const question = questionObj.Assessment_Question;
    const content = questionObj.assessment_question_url;


    const options = questionObj.optionList;
    var assessmentType = questionObj.Assessment_Type;
    var contentDiv = $('#contentDiv');
    
    // Clear existing content in contentDiv
    contentDiv.empty();
    
    // Depending on the assessment type, add the corresponding content
    if (assessmentType === 1) {
        // Add image
        var imageUrl = questionObj.assessment_question_url;
        var imageElement = $('<img>').attr('src', imageUrl).attr('alt', 'Image Alt Text').css({
            'width': '100%',
            'max-width': '100%',
            'height': '100%',
            'border-radius':'10px'
        });
        contentDiv.append(imageElement);
    } else if (assessmentType === 2) {
        // Add audio
        var audioUrl = questionObj.assessment_question_url;
        var audioElement = $('<audio controls>').attr('src', audioUrl);
        contentDiv.append(audioElement);
    } else if (assessmentType === 3) {
        // Add video
        var videoUrl = questionObj.assessment_question_url;
        var videoElement = $('<video controls>').attr('src', videoUrl).css({
            'width': '100%',
            'max-width': '100%',
            'height': '100%'
        });
        contentDiv.append(videoElement);
    } else {
        // Handle other assessment types or provide a default behavior
        contentDiv.text('Unsupported assessment type');
    }



// Empty the contentDiv and append the new image
$('#contentDiv').empty().append(imageElement);

    // Display question number and text
    const questionNumber = currentQuestionIndex + 1;
  
    $('#questionText').html(`${question}`);

    // Clear existing options
    $('.radio-container').empty();

    // Iterate over options and create radio buttons
    options.forEach((option, index) => {
        const optionLabel = $("<label>").text(option.Answer_Description);
        const optionInput = $("<input>").attr({
            type: "radio",
            name: "group",
            value: `${index + 1}`
        });

        optionLabel.prepend(optionInput);
        $('.radio-container').append(optionLabel);
    });

   


    $('#continueButton').off('click').on('click', function () {
      const selectedOption = $('input[name=group]:checked').val();
      
   
      if (selectedOption) {
          $('#questionModal').modal('hide');
          // currentQuestionIndex++;
          resumeGame();
         
          const errorTextElement = $('#error-text');
          errorTextElement.text("");
          const option=questionObj.optionList;
          console.log(option);
          AssementData.push(questionObj);
          // let scores=10;
          if (selectedOption == QuestionList[currentQuestionIndex - 1].optionList[0].Right_Ans) {
              console.log(QuestionList[currentQuestionIndex - 1].optionList[0]);
              id_question=QuestionList[currentQuestionIndex - 1].optionList[0].Id_Assessment_question_ans;
              GivenAns = '1';
              scores = 10;
          } else {
              console.log('wrong answer');
              // Incorrect answer
              id_question=QuestionList[currentQuestionIndex - 1].optionList[0].Id_Assessment_question_ans;
              GivenAns = '2';
              scores = 0;         
               }
              
          // Create an object with assessment data
          const assessmentAnsResponse = {'isRightAns': GivenAns, 'AchieveScore': scores,'id_question':id_question};
          // Log the AssementData array
          assessmentObject.push(assessmentAnsResponse);

      }else {
          const errorTextElement = $('#error-text');
          errorTextElement.text("Click any one option");
          // setTimeout(function () {
          //     $('#questionModal').modal('show');
              
              
          // }, 0);
      }
      
  });



    let timer = 30; // Set the timer duration in seconds
    const timerElement = $('#timer');
    timerElement.text(`${timer} sec`);

    const timerInterval = setInterval(() => {
        timer--;

        if (timer >= 0) {
            timerElement.text(`${timer} Sec`);
        } else {
            clearInterval(timerInterval);
            // Time's up, handle it as needed
            onTimeUp();
        }
    }, 1000);

    // Clear timer when modal is hidden
    $('#questionModal').on('hidden.bs.modal', function () {
        clearInterval(timerInterval);
    });

    // Show the question modal
    $('#questionModal').modal('show');
}



function onTimeUp() {
    // Handle the timeout logic here
    player.start = true; // Set player start to true to resume the game
    gameStart.play(); // Play the game start audio

    // Automatically select an option (you can modify this based on your logic)
    $('input[name=group]').first().prop('checked', true);

    // Proceed to the next question
    resumeGame();

    // Hide the question modal
    $('#questionModal').modal('hide');
}



function pauseGame() {
    isGamePaused = true;
    // Add any additional logic or UI changes you want when the game is paused
    gameStart.pause();
}

function resumeGame() {
    gameStart.play();
  
    player.start = true;
    if (currentQuestionIndex <= QuestionList.length) {
        window.requestAnimationFrame(gamePlay);
        

    }
    else {
        onGameOver()
        // showPopup()
        showNewPopup()
    }

}


function onGameOver() {
  player.start = false;
  gameStart.pause();
  gameOver.play();

  const mergedData = AssementData.map((game, index) => ({ ...game, ...assessmentObject[index] }));

console.log(mergedData);
  let assessmentData =[];
  let assementDataForMasterLog=[];

 var sum=0;
  for (let i = 1; i < mergedData.length; i++) {
   
     sum=mergedData[i].AchieveScore  + sum   ;
     console.log('inSum',sum);
    
     
   
      // i=1;mergedData
      let model = {
        ID_ORGANIZATION: ParamOrgID,
        id_user:paramUserID,
        Id_Assessment: mergedData[i].Id_Assessment,
        Id_Game: mergedData[i].Id_Game,
        attempt_no: mergedData[i].allow_attempt,
       id_question:mergedData[i].Id_Assessment_question,
        is_right: mergedData[i].isRightAns,
        score: mergedData[i].AchieveScore,
      Id_Assessment_question_ans:mergedData[i].id_question,
        Time: mergedData[i].Timer,
        M2ostAssessmentId: 478
    };
    console.log('OutSum',sum);
    let modelForGameMasterLog = {
        ID_ORGANIZATION: ParamOrgID,
        id_user:paramUserID,
        Id_Room: mergedData[0].Id_Assessment,
        Id_Game: mergedData[0].Id_Game,
        attempt_no: mergedData[0].allow_attempt,
        score:sum,
   
    };

      assessmentData.push(model);
      assementDataForMasterLog.push(modelForGameMasterLog);
      // Add other data objects as needed...
  }

 

  console.log('AssesmentLog',assementDataForMasterLog);
  
  saveAssessment(assessmentData);
  saveAssessmentMasterLog(assementDataForMasterLog[assementDataForMasterLog.length - 1]);


  startScreen.classList.remove('hide');
  startScreen.innerHTML = "<b>Thank You For Completed Your Assesment<b>";

}


function moveRoadLines(){
    let roadLines = document.querySelectorAll('.roadLines');
    roadLines.forEach((item)=> {
        if(item.y >= 700){
            item.y -= 750;
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}

function moveEnemyCars(carElement) {
    let enemyCars = document.querySelectorAll('.enemyCar');
    enemyCars.forEach((item) => {
        if (!item.collided && onCollision(carElement, item)) {
            item.collided = true;
            displayQuestion();


        }
        if (item.y >= 750) {
            item.y = -300;
            item.collided = false; // Reset collision status when the car is repositioned
            item.style.left = Math.floor(Math.random() * 350) + "px";
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}


function gamePlay() {
    let carElement = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();

    if(player.start){
        moveRoadLines();
        moveEnemyCars(carElement);
            
        // if(keys.ArrowUp && player.y > (road.top + 70)) player.y -= player.speed;
        // if(keys.ArrowDown && player.y < (road.bottom - 85)) player.y += player.speed;
        if(keys.ArrowLeft && player.x > 0) player.x -= player.speed;
        if(keys.ArrowRight && player.x < (road.width - 90)) player.x += player.speed;

        carElement.style.top = player.y + "px";
        carElement.style.left = player.x + "px";

        window.requestAnimationFrame(gamePlay);

        // player.score++;
        // const ps = player.score - 1;
        // score.innerHTML = 'Score: ' + ps;          
    }
}
document.addEventListener('keydown', (e)=>{
    e.preventDefault();
    keys[e.key] = true;
});

document.addEventListener('keyup', (e)=>{
    e.preventDefault();
    keys[e.key] = false;
});



let touchStartX;
let raceCarStartX;

document.addEventListener("touchstart", function (e) {
    e.preventDefault();
    touchStartX = e.touches[0].clientX;
    raceCarStartX = player.x;
});

document.addEventListener("touchmove", function (e) {
    e.preventDefault();
    if (touchStartX !== undefined && raceCarStartX !== undefined)  {
      const touchX = e.touches[0].clientX;

      if ((-23.7< raceCarStartX + (touchX-touchStartX)) && (252>raceCarStartX + (touchX-touchStartX))){
        const deltaX = touchX - touchStartX;
        player.x = raceCarStartX + deltaX;
        console.log({player:player.x})
        console.log({touchStartX,deltaX,touchX,raceCarStartX})

        const road = gameArea.getBoundingClientRect();
        player.x = Math.min(Math.max(player.x, 0), road.width - carElement.offsetWidth);
      }
    }
});

document.addEventListener("touchend", function (e) {
    touchStartX = undefined;
    raceCarStartX = undefined;
});
