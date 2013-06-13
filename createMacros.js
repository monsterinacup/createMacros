function createMacros() {
	
	//Take a value from bodyweight entry fo calculations
	bw = parseFloat(document.parameters.bodyWeight.value); 
	
	//Did the user select Fat Loss or Muscle Gain?
	var dietType = document.getElementById('dietChoice').value; 

	if (dietType === "Fat Loss") {
		//80% of maintenance, 33cals per kg bw, rounded to the nearest 5
		var cal = (Math.floor(0.8*33*bw/5))*5; 
	} else {
		//100% of maintenance, 33cals per kg bw, rounded to the nearest 5
		var cal = Math.floor(33*bw/5)*5; 
	}
	
	//Protein set to 2x bw
	var pro = Math.ceil(bw*2); 
	
	//Fat 0.5x bw before training
	var fatTrain = Math.floor(bw*0.5); 
	
	//Carbs on a training day - remainder after P + F
	var carbTrain = Math.floor((cal - (pro*4) - (fatTrain*9))/4);
	
	//Fat on a rest day - remainder of calories after protein
	var fatRest = Math.floor((cal - (pro*4))/9);
	
	//No carbs on a rest day - THIS MIGHT CHANGE TO LOWER CARB ON REST DAYS
	var carbRest = 0;
		
	
		

	//Write the outputs to the user
	document.outputs.calories.value = cal;
	//Training Day Macros - "On"
	document.outputs.proteinOn.value = pro;
	document.outputs.carbsOn.value = carbTrain;
	document.outputs.fatOn.value = fatTrain;
	//Rest day Macros - "Off"
	document.outputs.proteinOff.value = pro;
	document.outputs.fatOff.value = fatRest;
	document.outputs.carbsOff.value = carbRest;


}