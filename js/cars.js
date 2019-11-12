var cars = ["delsol", "sx200"];

var clicked = false;

//$(function(){
//    $('div[onload]').trigger('onload');
//});

for(i=0; i<cars.length;++i)
{
	var nameDiv = cars[i];
	
	var imagess = "img/" + cars[i] + "0.jpg\"";
	var htmlString = $('.container').html();
	
	 
	
	$('.container').html(htmlString + '<div class="car" id="' + nameDiv + '" ><img src="' + imagess + ' alt="" style="width:600px;height:450px;"> </div>');
	//var nameDiv = document.getElementById(nameDiv);
		
    //var s = cars[i];		
}



for( i=0; i<cars.length;i++)
{
	
	let s = '';
	s = cars[i];
	
	
	var nameDiv = document.getElementById(s);
	  
	$(nameDiv).ready( function() { changePicture(); });    
    nameDiv.addEventListener("click", function(){clickDiv(this,s);});

	
}
//var hS = $('.container').html();
//$('.container').html("<ul>" + hS + "</ul>");



function clickDiv(e,str)
{
	if(clicked == false)
	{		
		alert(str);
		var txtStr = str + ".txt";
		alert(txtStr);
		$('#' + str).css('background-image', txtStr);
	}
	else
	{
		
	}	
}


var numer = 0;//Math.floor(Math.random()*3);

function changePicture()
{
	numer++;
	if(numer > 2){ numer = 0;}
	for(i=0; i < cars.length;i++)
	{	
		let aa = cars[i];
		let pic = "<img src = \"img/" + aa + numer + ".jpg\" alt=\"\" style=\"width:600px;height:450px;\" />";	
	
		$('#' + aa).html(pic);
	
		$('#' + aa).fadeIn(500);
		//alert(aa + "zmiana" + numer);
	}
	setTimeout("changePicture()", 5000);	
	setTimeout(function(){ for(i=0; i < cars.length;i++){let aa = cars[i];$('#' + aa).fadeOut(1000)};},4000);
}	
