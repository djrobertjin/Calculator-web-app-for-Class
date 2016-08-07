/*
Da-Jun Robert Jin
Browser: CHROME
*/

var display = document.getElementById('number');

var buttons = document.querySelectorAll('#calculator button.num');
//console.log(buttons);
var decimal = false;
var negative = false;

display.innerHTML = '0';
//console.log(display.innerHTML.length);
for (var i=0; i<buttons.length; i++)
{
	var button = buttons[i];
	var text = buttons[i].textContent;
	button.onclick = function(e){ 
		var val = this.textContent; 
		console.log(display.innerHTML.length);
		if (val=='C'){
			display.innerHTML = '0';
			decimal = false;
		}
		else if (val == '.'){
			if (!decimal){
				display.innerHTML += val;
				decimal = true;
			}
		}

		else{
			if (display.innerHTML.length < 15){
				if (display.innerHTML == '0')
				{
					display.innerHTML = val;
				}
				else{
					display.innerHTML += val; 
				}
			}
		}
		
	};

}
var plusmn = document.getElementById('plusmn');
plusmn.onclick = function(e){

	if (!(display.innerHTML == '' || display.innerHTML =='0'))
	{
		if (!negative){
			display.innerHTML = '-' + display.innerHTML;
			negative = true;
		}
		else{
			display.innerHTML = display.innerHTML.substring(1);
			negative = false;
		}
	}
}