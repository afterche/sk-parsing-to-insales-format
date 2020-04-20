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
var ami = "sk1.js"; //system.args[0];//code name
var report = ami + " ";
var err_index = "";
var iglobal = 0;
var capcha_index = String(Math.random()).slice(9);
var capcha_name = capcha_index + ".png";
var capcha_tipe = "lin"; // Set captcha tipe

//sk settings
//--------------------
var stream = fs.open("set.txt", 'r');
page_ref = stream.readLine();
console.log("page_ref ="+page_ref)
if (page_ref==""){
	console.log ("ERROR. EMTY SET FILE. Exit")
	phantom.exit()
}
//--------------------
fs.write("refs.csv",'',"w")
page_number=1;

console.log("Phantomjs.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log("Phantomjs.Hello I am " + "sk1");
console.log("Phantomjs.Hello!");

OpenPage()

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
	page.settings.userAgent = 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14';
	console.log(page.settings.userAgent);
	page.open(page_ref, function(status) {
		if (status !== "success") {
			console.log("Phantomjs.Cant to load page");
			fs.write("WARNING.txt","Phantomjs.Cant to load page. See screenshot. Exit.","a");
			setTimeout(full_screen_exit, 10000);
		} else {
			setTimeout(GetRef, 30000);
			
			//setTimeout(testerLoginAfterCookies, 1000);
		}
	});
}

function GetRef(){
	console.log('GetRef')
	console.log("page_number="+page_number)
	var numbers_of_refs=page.evaluate(function(){
				return document.getElementsByClassName('col-sm-6 col-lg-4 mb-5').length;
	});
	
	console.log(numbers_of_refs)
	
	for (var i=0; i<numbers_of_refs; i++){//не меньше или равно так как тагс считаются с нуля, а length с единицы 
		
		ref=page.evaluate(function(i){
			return document.getElementsByClassName("col-sm-6 col-lg-4 mb-5")[i].getElementsByClassName("d-block card card-text-dark border-0 text-center transition-3d-hover")[0].getAttribute("href");
		},i);
		if (ref){
			ref="https://slepayakurica.ru"+ref;
			console.log(ref);
			fs.write("refs.csv",ref+'\n',"a")
		} 
	}
	setTimeout(ChekNexPage, 3000);
}

function ChekNexPage(){
	console.log("ChekNexPage")
	
	bul = page.evaluate(function() {
			bul = document.getElementsByClassName("btn btn-soft-primary btn-block transition-3d-hover mb-5 LoadMoreSection")[0];
			if (bul) return true; else return false;
	});
	console.log(bul)
	
	if(bul){
		console.log("click for next page")
		page.evaluate(function() {
			var hlbx1x1x1a = document.getElementsByClassName("sr-only")[1];
			var hlbx1x1x1e = document.createEvent("MouseEvents");
			hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
		});
		page_number++;
		setTimeout(GetRef, 3000);
	} else {
		console.log("No more pages");
		setTimeout(full_screen_exit, 1000);
	}
	
}




function full_screen_exit() {
	console.log("full_screen_exit")
	 /*  page.clipRect = {
		top: 30000,
		left: 0,
		width: 2000,
		height: 10000
	};   */
	//page.render("sk0.jpg");
	//page.render("sk1.png");
	setTimeout(exit, 15000);
}

function exit() {
	console.log("Phantomjs.Exit.");
	console.log("-------------------------");
	phantom.exit();
}

