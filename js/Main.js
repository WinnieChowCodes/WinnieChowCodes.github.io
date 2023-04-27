let currentLevel = 0;
let hasUsedHint = false;
let userAttempts = 0;
let resultStars = 0;

//gets the next Level
function getNextLevel() {
	//Reset necessary values
	$("#query").val("");
	hasUsedHint = false;
	userAttempts = 0;

	//Update levels
	currentLevel = currentLevel + 1;
	$("#questionLevel").html("Current Level: " + Game[currentLevel].id + "/20")
	$("#question").html(Game[currentLevel].question);
	$("#hint").html(Game[currentLevel].hint);
	$("#imgERD").attr("src", Game[currentLevel].erd);
}

//Validates if the solution is "correct"
function isSolutionCorrect() {
	var userSolution = $("#query").val().toLowerCase().replaceAll(" ","");
	console.log(userSolution);
	if (userSolution == Game[currentLevel].solution) {
		determineResults();
		$("#onSuccessMessage").html("Solution Correct!");
		getNextLevel();
	}
	else {
		$("#onSuccessMessage").html("Solution incorrect - please try again!");
		htmlInsert("stars", '<img src="./images/Character_furious.png" />');
	}
}

//Add a user attempt to the global counter
function addUserAttempt() {
	userAttempts = userAttempts + 1;
}

function determineResults() {
	console.log("Has used hint: " + hasUsedHint);
	console.log("Number of Attempts: " + userAttempts);
	//Base Condition - If User hasnt selected a hint and the attempts are <1
	if ((hasUsedHint == false) && (userAttempts <= 1)) {
		resultStars = 3;
	}
	//The user has required multiple attempts AND has used a hint
	else if ((hasUsedHint == true) && (userAttempts > 1)) {
		resultStars = 1;
	}

	//If the user has used a hint OR has required multiple attempts
	else if ((hasUsedHint == true) || (userAttempts > 1)) {
		resultStars = 2;
	}
	generateScore(resultStars);
}

//Generates the score on screen
function generateScore(resultStars) {
	var body = '<img src="./images/Character_shocked.png" />';
	for (var i = 0; i < resultStars; i++) {
		body += '<i class="fa-solid fa-star fa-beat fa-2xl" style="color: #ffdd00;"></i>';
	}
	if (resultStars == 2) {
		body += '<i class="fa-regular fa-star fa-2xl"></i>';
	}
	if (resultStars == 1) {
		body += '<i class="fa-regular fa-star fa-2xl"></i>';
		body += '<i class="fa-regular fa-star fa-2xl"></i>';
	}
	htmlInsert("stars", body);

}
