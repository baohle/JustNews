function updateField(){
 
	var html = '<script src="http://www.yvoschaap.com/ytpage/ytembed.js" type="text/javascript"></script>';
	html += "\n";
	//html += '<di'+ nada +'v id="ytPlayer"></div>\n';
	html += '<div id="ytThumbs"></div>';
	html += "\n";
		
	var string = '\'block\':\'ytThumbs\',';
 
	var keyword = document.getElementById('keyword').value;
	string += '\'q\':\''+keyword+'\',';	
	var htmlType = 'search';
	string += '\'type\':\''+htmlType+'\',';
	var htmlResults = 20;
	string += '\'results\':'+htmlResults+',';
	var htmlOrder = 'most_relevance'
	string += '\'order\':\''+htmlOrder+'\',';
	var htmlPlayer = 'embed'
	string += '\'player\':\''+htmlPlayer+'\',';
	var htmlLayout = 'full'
	string += '\'layout\':\''+htmlLayout+'\'';
	html += "\n";
	html += '<script type="text/javascript">';
	html += "\n";
	html += '	ytEmbed.init({'+string+'});';
	html += "\n";
	html += '</script>';
	
	document.getElementById('htmlResult').value = html;
	
	var execute = {'q': keyword,'type': htmlType,'results': htmlResults,'block':'youtubeDivResults','order':htmlOrder,'player': htmlPlayer,'layout': htmlLayout};
	alert("q = " + execute.q + ",type = " + execute.type + ",results = " + execute.results + ",block = " + execute.block + ",order = " + execute.order + ",player = " + execute.player + ",layout = " + execute.layout);
	alert(execute.start);
	ytEmbed.init(execute);
}