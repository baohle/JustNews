function updateField(){
 
	var code = '<script src="http://www.yvoschaap.com/ytpage/ytembed.js" type="text/javascript"></script>';
	code += "\n";
	//code += '<di'+ nada +'v id="ytPlayer"></div>\n';
	code += '<div id="ytThumbs"></div>';
	code += "\n";
		
	var string = '\'block\':\'ytThumbs\',';
 
	var codeQ = document.getElementById('codeQ').value;
	string += '\'q\':\''+codeQ+'\',';	
	var codeType = 'search';
	string += '\'type\':\''+codeType+'\',';
	var codeResults = 15;
	string += '\'results\':'+codeResults+',';
	var codeOrder = 'most_relevance'
	string += '\'order\':\''+codeOrder+'\',';
	var codePlayer = 'embed'
	string += '\'player\':\''+codePlayer+'\',';
	var codeLayout = 'full'
	string += '\'layout\':\''+codeLayout+'\'';
	code += "\n";
	code += '<script type="text/javascript">';
	code += "\n";
	code += '	ytEmbed.init({'+string+'});';
	code += "\n";
	code += '</script>';
	
	document.getElementById('codeResult').value = code;
	
	var execute = {'q':codeQ,'type':codeType,'results':codeResults,'block':'youtubeDivResults','order':codeOrder,'player':codePlayer,'layout':codeLayout};
	ytEmbed.init(execute);
}