function ShowHelp(img, title, desc){
	div = document.createElement('div');
	div.id = 'help';
	div.style.display = 'inline';
	div.style.position = 'absolute';
	div.style.width = '300';
	div.style.backgroundColor = '#CFF4FF';
	div.style.border = 'solid 1px #008ACF';
	div.style.padding = '10px';
	div.innerHTML = '<span class=help><b>' + title + '<\/b><\/span><br /><div style="padding-left:10; padding-right:5;padding-top:5px;" class=help>' + desc + '<\/div>';

	var parent = img.parentNode;
	if(img.nextSibling)
		parent.insertBefore(div, img.nextSibling);
	else
		parent.appendChild(div)
}

function HideHelp(img){
	if ($("#help").length) {
		$("#help").css('display','none');
		setTimeout('RemoveHelp()', 1);
	}
}

function RemoveHelp(){
	$("#help").remove();
}

function chkform() {
	var tax_rate = $('#tax_rate').val();
	if(tax_rate == '')
	{
		alert('Enter tax rate');
		return false;
	}
	if (isNaN(tax_rate))
	{
		alert('Enter proper tax rate');
		return false;
	}
	else
	{
		return true;
	}

}

function chkforms() {
	
	var tax_rate = $('#taxrate').val();
	if(tax_rate == '')
	{
		alert('Enter tax rate');
		return false;
	}
	if (isNaN(tax_rate))
	{
		alert('Enter proper tax rate');
		return false;
	}
	else
	{
		return true;
	}

}



