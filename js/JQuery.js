//Executes when the document loads
$(document).ready(function() {
	//Generate First level
	$("#questionLevel").html("Current Level: " + Game[currentLevel].id + "/20")
	$("#question").html(Game[currentLevel].question);
	$("#hint").html(Game[currentLevel].hint);
	$("#imgERD").attr("src", Game[currentLevel].erd);
	
	$("#btnHint").on("click", function(){
		hasUsedHint = true;
	})
	
	$("#btnQuestion").on("click", function(){
		isSolutionCorrect();
	})
	
	$("#btnQuery").on("click",function() {
		addUserAttempt();
		getData($("#query").val());
	});
	
})