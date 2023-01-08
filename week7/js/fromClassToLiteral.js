// constructor function
class Website {
	constructor(protocol) {
		this.protocol = protocol;
		this.url = this.protocol + "://www.acs.uwinnipeg.ca"; ///url~unified resource location
	}
	printUrl() {
		console.log(this.url);
	}
}

var webUsingHttp = new Website("http"); //old one
var webUsingHttps = new Website("https"); //secure
webUsingHttp.printUrl(); // http://www.acs.uwinnipeg.ca
webUsingHttps.printUrl(); // https://www.acs.uwinnipeg.ca

// Excercise
//Convert the aove code using object literal
/*
let website = {
	protocol: "http",
	url: this.protocol + "//.....",
	printUrl() {
		console.log("......");
	}
}
*/

function createObj(prtcl) {
	let webSite2 = {
		protocol2: prtcl,
		url2: prtcl + "://www.acs.uwinnipeg.ca",
		printUrl() {
			console.log(this.url2);
		},
	};
	return webSite2;
}

let websiteHttp2 = createObj("http");
let websiteHttps2 = createObj("https");

websiteHttp2.printUrl();
websiteHttps2.printUrl();
console.log(websiteHttp2);



