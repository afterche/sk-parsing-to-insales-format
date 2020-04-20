/* tar -xvf /path/to/archive.tar.bz2
apt-get install libfontconfig1
sudo yum install fontconfig freetype freetype-devel fontconfig-devel libstdc++
pscp -i C:\path\my-key-pair.ppk C:\path\Sample_file.txt ec2-user@public_dns:/home/ec2-user/frDfp3.js */

var system = require('system');
var args = system.args;
var sysuser = system.args[1];
var page = require("webpage").create();
var fs = require("fs");
var execFile = require("child_process").execFile;
var home_dir = fs.workingDirectory;

//init
switcher=1
line_log='';
var start_time = curent_time = "";
var balance = "";
var sbalance = "";
var answer = "";
var fname = "captcha.png";
var captcha_id = "";
var pc = ""; //page_content
var ip = "";
var ps = p = "";
var topCaptcha = leftCaptcha = 0;
var ami = "sk2.js"; //system.args[0];//code name
var report = ami + " ";
var err_index = "";
var iglobal = 0;
var capcha_index = String(Math.random()).slice(9);
var capcha_name = capcha_index + ".png";
var capcha_tipe = "lin"; // Set captcha tipe



brend_name='RAY-BAN_';
dir_cat_name = 'Солнцезащитные очки'

var line_to_csv =[];

item_ref_page="";
item_index=1;
picture_index=1;
jpg_small = "iuo";
jpg_big = "lkj";
parametrs=[];
var name_on_base='';

var stream = fs.open("refs.csv", 'r');
fs.write(brend_name+"import.csv", '', 'w');
fs.write(brend_name+"import.csv", 'Корневая;Подкатегория 1;Подкатегория 2;Артикул;Название товара;Краткое описание;Полное описание;Изображения;Параметр: Бренд;Свойство: Пол;Свойство: В наличии;Цена продажи'+'\n', 'a');

/* 
line_to_csv [0] = dir_cat_name; //Корневая
line_to_csv [1] = brend_name; //Подкатегория 1
line_to_csv [2] = ""; //Подкатегория 2
line_to_csv [3] = item_id;//Артикул
line_to_csv [4] = ;//Название товара;
line_to_csv [5] = "Стильные солнцезащитные очки";//Краткое описание;
line_to_csv [6] = "Стильные солнцезащитные очки";//Полное описание;
line_to_csv [7] = ;//Изображения;
line_to_csv [8] = ;//---1 Бренд
line_to_csv [9] = ;//---2 Пол
line_to_csv [10] = ;//---3 В наличии
line_to_csv [11] = ;// Цена продажи 
*/





console.log("Phantomjs.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log("Phantomjs.Hello I am " + "sk1");
console.log("Phantomjs.Hello!");

//-start html file
fs.write(brend_name+"analiz.html", '', 'w');
fs.write(brend_name+"analiz.html",'<html>'+"\n","a");
fs.write(brend_name+"analiz.html",'<head>'+"\n","a");
fs.write(brend_name+"analiz.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write(brend_name+"analiz.html",'</head>'+"\n","a");
fs.write(brend_name+"analiz.html",'<body>'+"\n","a");


ReadFromFile();
function ReadFromFile(){
	if (!stream.atEnd()) {
		line = stream.readLine();
		if (line != "") {
			line_split=line.split(';')
			
			item_ref_page= line_split[0];
			name_on_base = line_split[1];
			item_id = line_split[2];
			
			console.log("item_ref_page="+item_ref_page)
			console.log("name_on_base="+name_on_base)
			
			item_ref_page=item_ref_page.trim();
			console.log("item_ref_page="+item_ref_page);
			OpenPage();
		} else if (item_ref_page == ""){
			console.log("item_ref_page="+item_ref_page);
			console.log("EMPTY LINE");
			ReadFromFile();
		}
	} else {
		fs.write(brend_name+"analiz.html",'</body>'+"\n","a");
		fs.write(brend_name+"analiz.html",'</html>'+"\n","a");
		
		console.log("END REF FILE. EXIT");
		full_screen_exit();
	}	
						
}

function OpenPage() {
	console.log("Phantomjs.OpenPage");
	 page.viewportSize = {
		width: 1920,
		height: 1080
	};  //без этого вместо капчи картинка с Tиг пойми чем
	var useragent = [];
	useragent.push('Mozilla/5.0 (Windows; U; Windows NT 5.1; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.4 (Change: )');
	useragent.push('Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14');
	useragent.push('Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50');
	useragent.push('Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34');
	useragent.push('Mozilla/5.0 (Windows; U; Windows NT 5.1; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.4 (Change: )');
	useragent.push('Mozilla/5.0 (X11; U; Linux; fr-FR) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.4');
	useragent.push('Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6');
	useragent.push('Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14');
	useragent.push('Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50');
	useragent.push('Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34');
	page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36';
	console.log(page.settings.userAgent);
	page.open(item_ref_page, function(status) {
		if (status !== "success") {
			console.log("Phantomjs.Cant to load page");
			fs.write("WARNING.txt","Phantomjs.Cant to load page. See screenshot. Exit.","a");
			setTimeout(full_screen_exit, 10000);
		} else {
			
			/* if (!window.jQuery) {  
				console.log ("load jqery")
				page.injectJs('jquery.min.js');
			} */
			
			setTimeout(WateToLoad, 5000);
			
			//setTimeout(testerLoginAfterCookies, 1000);
		}
	});
}

function WateToLoad(){
	console.log("WateToLoad");
	name = page.evaluate(function(){
				return document.getElementsByClassName('d-block h3 mb-0 product-price font-weight-medium font-size-2')[0].innerText;
	});
	if (name) setTimeout(GetItemsData, 1000); else setTimeout(WateToLoad, 2000);
}


function GetItemsData(){
	console.log ("GetItemsData")
	
	name = page.evaluate(function(){
				return document.getElementsByTagName('h1')[0].innerText;
	});
	
	price = page.evaluate(function(){
				return document.getElementsByClassName('d-block h3 mb-0 product-price font-weight-medium font-size-2')[0].innerText;
	});
	
	
	
	var i=0;
	var t=true;
	parametrs = [];
	
	while (t) {
		console.log(i)
		parametrs[i]={};
		
		var bool = page.evaluate(function(i){
			if (document.getElementsByClassName('text-secondary text-right')[i].innerText) return true; else return false;
		},i);
		console.log(bool)
		
		if (bool){
			parametrs[i]=page.evaluate(function(i){
				return {
					param: document.getElementsByClassName('d-flex justify-content-between py-1')[i].getElementsByClassName('font-weight-medium')[0].innerText,
					v_param: document.getElementsByClassName('text-secondary text-right')[i].innerText
				};
			},i);
		} else{
			t=false;
		}
		console.log (parametrs[i].param+"  "+parametrs[i].v_param);	
		i++;	
	} ;
	
	line_to_csv [0] = dir_cat_name; //Корневая
	line_to_csv [1] = brend_name; //Подкатегория 1
	line_to_csv [2] = ""; //Подкатегория 2
	line_to_csv [3] = item_id;//Артикул
	line_to_csv [4] = name;//Название товара;
	line_to_csv [5] = "Стильные солнцезащитные очки "+name ;//Краткое описание;
	line_to_csv [6] = "Стильные солнцезащитные очки "+name ;//Полное описание;
	line_to_csv [7] = "";//Изображения;
	line_to_csv [8] = parametrs[0].v_param;//---1 Бренд
	line_to_csv [9] = parametrs[2].v_param;//---2 Пол
	line_to_csv [10] = "В Наличии" ;//---3 В наличии
	line_to_csv [11] = price;// Цена продажи 
	
	
	
	jpg_big= page.evaluate(function(){
		return document.getElementsByClassName('js-slide px-7 my-0 js-fancybox u-media-viewer slick-slide slick-active')[0].getAttribute("data-src");
	});		
	
	jpg_small= page.evaluate(function(){
		return document.getElementsByClassName('js-slide px-7 my-0 js-fancybox u-media-viewer slick-slide slick-active')[0].getElementsByClassName('img-fluid')[0].getAttribute("src");
	});
	
	jpg_brend=page.evaluate(function(){
		return document.getElementsByClassName("brand-product mb-3")[0].getElementsByTagName("img")[0].getAttribute("src");
	});
	
	jpg_brend="https://slepayakurica.ru"+jpg_brend;
	
	//console.log ("jpg_big ="+jpg_big);
	//console.log ("jpg_small ="+jpg_small);
	
	
	
	///local/img/1200/16/00-00016308/1.jpg
	
	jpg_big=jpg_big.substring(0, jpg_big.lastIndexOf("/"));
	jpg_small=jpg_small.substring(0, jpg_small.lastIndexOf("/"));

	jpg_small = "https://slepayakurica.ru"+jpg_small+"/";
	jpg_big = "https://slepayakurica.ru"+jpg_big+"/";
	
	//console.log ("jpg_big ="+jpg_big)
	//console.log ("jpg_small ="+jpg_small)
	
	console.log ("name ="+name)
	console.log ("price ="+price)
	
	picture_index=1;
	setTimeout(GetPicture, 1000);
	
}

function GetPicture(){
	
	
	page.open(""+jpg_small+picture_index+".jpg", function(status) {
		if (status !== "success") {
			console.log("Phantomjs.Cant to load page");
			fs.write("WARNING.txt","Phantomjs.Cant to load page. See screenshot. Exit.","a");
			setTimeout(full_screen_exit, 10000);
			
		} else {
			setTimeout(chek_status, 10);
			
		}
	});
	
	function chek_status(){
		var chek_st= page.evaluate(function(){
			return document.getElementsByClassName('error')[0];
		});
		if (!chek_st){
			
			var h = page.evaluate(function(){
				return document.getElementsByTagName("img")[0].height
			});
			
			var w = page.evaluate(function(){
				return document.getElementsByTagName("img")[0].width
			});
			
			console.log("doing screenshot")
			page.clipRect = {
				top: 0,
				left: 0,
				width: w,
				height: h
			};  
			page.render(brend_name+"img/pct"+item_index+picture_index+".jpg");
			
			//line_to_csv [7] = line_to_csv [7]+" "+jpg_small+picture_index+".jpg" ;//Изображения;
			
			picture_index++;
			setTimeout(GetPicture, 10);
			
		} else {
			console.log("no scr shot")
			picture_index=1
			GetBigPicture()
		}
	}
	
}
function GetBigPicture(){
	
	console.log(""+jpg_big+picture_index+".jpg")
	page.open(""+jpg_big+picture_index+".jpg", function(status) {
		if (status !== "success") {
			console.log("Phantomjs.Cant to load page");
			fs.write("WARNING.txt","Phantomjs.Cant to load page. See screenshot. Exit.","a");
			setTimeout(full_screen_exit, 10000);
			
		} else {
			setTimeout(chek_status, 10);
			
		}
	});
	
	function chek_status(){
		var chek_st= page.evaluate(function(){
			return document.getElementsByClassName('error')[0];
		});
		if (!chek_st){
			
			var h = page.evaluate(function(){
				return document.getElementsByTagName("img")[0].height
			});
			
			var w = page.evaluate(function(){
				return document.getElementsByTagName("img")[0].width
			});
			
			console.log("doing screenshot")
			page.clipRect = {
				top: 0,
				left: 0,
				width: w,
				height: h
			}; 
			
			page.render(brend_name+"img/pct"+"_big"+item_index+picture_index+".jpg");
			
			line_to_csv [7] = line_to_csv [7]+jpg_big+picture_index+".jpg"+" " ;//Изображения;
			picture_index++;
			setTimeout(GetBigPicture, 10);
			
		} else {
			console.log("no scr shot")
			BildHTML()
		}
	}
}

function BildHTML(){
	fs.write(brend_name+"analiz.html",'<img src="'+jpg_brend+'">'+"\n","a");
fs.write(brend_name+"analiz.html",'<h3>'+'Наименование на сайте: '+name+'</h3>'+"\n","a");
if (name_on_base) fs.write(brend_name+"analiz.html",'<h3>'+'Наименование в базе 1с: '+name_on_base+'</h3>'+"\n","a"); 

fs.write(brend_name+"analiz.html",'<h3>'+price+'</h3>'+"\n","a");
fs.write(brend_name+"analiz.html",'<a href="'+item_ref_page+'">To maine site:</a>'+"\n","a");
//fs.write(brend_name+"analiz.html",'<h3>'+brend+'</h3>'+"\n","a");

var i=0;

while (parametrs[i]){
	var txt = parametrs[i].param+" : "+parametrs[i].v_param;
	if (parametrs[i].param) fs.write(brend_name+"analiz.html",'<h5>'+txt+'</h5>'+"\n","a");
	i++;
}

fs.write(brend_name+"analiz.html",'<br>'+"\n","a");

picture_index=1;
while (fs.isFile(brend_name+"img/pct"+item_index+picture_index+".jpg")){
	fs.write(brend_name+"analiz.html",'<img src='+brend_name+"img/pct"+item_index+picture_index+".jpg"+">"+"\n","a");
	fs.write(brend_name+"analiz.html",'<br>'+"\n","a");
	picture_index++;	
}

picture_index=1;
while (fs.isFile(brend_name+"img/pct"+"_big"+item_index+picture_index+".jpg")){
	fs.write(brend_name+"analiz.html",'<img src='+brend_name+"img/pct"+"_big"+item_index+picture_index+".jpg"+">"+"\n","a");
	fs.write(brend_name+"analiz.html",'<br>'+"\n","a");	
	picture_index++;
}

fs.write(brend_name+"analiz.html",'<br>'+"\n","a");
fs.write(brend_name+"analiz.html",'<br>'+"\n","a");

WriteCSV()
}


function WriteCSV(){
console.log ("WriteCSV");
line_to_csv [7]=line_to_csv [7].trim();

var to_csv = line_to_csv.join(';')
fs.write(brend_name+"import.csv", to_csv+"\n","a");

//----Next item
console.log ("item_index = "+item_index);
item_index++;
ReadFromFile();
//-----------------	
}

function full_screen_exit() {
		
	console.log("full_screen_exit")
	
	/*  page.clipRect = {
		top: 0,
		left: 0,
		width: 500,//1200
		height: 166//398
	};   */ 
	
	//page.render("sk2.jpg");
	//page.render("sk2.png");
	setTimeout(exit, 15000);
}

function exit() {
	console.log("Phantomjs.Exit.");
	console.log("-------------------------");
	phantom.exit();
}


