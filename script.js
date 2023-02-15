function temprature()
{
	var type = document.getElementById('convertFrom').value;
	if(type=='Celsius')
	{
		document.getElementById('Celsius').style.display = 'none';
		document.getElementById('Fahrenheit').style.display = 'block';
		document.getElementById('Kelvin').style.display = 'block';
		document.getElementById("resultIn").selectedIndex = 0;
	}
	else if(type=='Fahrenheit')
	{
		document.getElementById('Celsius').style.display = 'block';
		document.getElementById('Fahrenheit').style.display = 'none';
		document.getElementById('Kelvin').style.display = 'block';
		document.getElementById("resultIn").selectedIndex = 0;
	}
	else{
		document.getElementById('Celsius').style.display = 'block';
		document.getElementById('Fahrenheit').style.display = 'block';
		document.getElementById('Kelvin').style.display = 'none';
		document.getElementById("resultIn").selectedIndex = 0;
	}
}

function convert() {
	var degree = document.getElementById('degree').value;
	var val = parseFloat(degree);
	var type = document.getElementById('convertFrom').value;
	var changeIn = document.getElementById('resultIn').value;

	if (degree=='')
	{
		var result="Please enter some value.";
		var color = "tomato";
	}
	else if (type=='')
	{
		var result="Plese select degree type.";
		var color = "tomato";
	}
	else
	{
		var color = "Green";
		if(type=='Celsius')
		{
			if(changeIn =='Fahrenheit')
			{
				var result = (val*1.8)+32 +"°F";
				var color = "Green";
			}
			else if(changeIn =='Kelvin')
			{
				var result = val+273.15 +"K";
				var color = "Green";
			}
			else{
				var result = "Plese select convert in type";
				var color = "tomato";
			}
		}
		else if(type=='Fahrenheit')
		{
			if(changeIn =='Celsius')
			{
				var result = (val-32)/1.8 +"°C";
				var color = "Green";
			}
			else if(changeIn =='Kelvin')
			{
				var result = ((val-32)/1.8)+273.15 +"K";
				var color = "Green";
			}
			else{
				var result = "Plese select convert in type";
				var color = "tomato";
			}
		}
		else if(type=='Kelvin')
		{
			if(changeIn =='Fahrenheit')
			{
				var result = ((val-273.15)*1.8)+32 +"°F";
				var color = "Green";
			}
			else if(changeIn =='Celsius')
			{
				var result = val-273.15 +"°C";
				var color = "Green";
			}
			else{
				var result = "Plese select convert in type";
				var color = "tomato";
			}
		}
		else{
			var result = "Plese select convert in type";
			var color = "tomato";
		}
	}
	document.getElementsByName('result')[0].value= result;
	document.getElementById('result').style.color = color;
}