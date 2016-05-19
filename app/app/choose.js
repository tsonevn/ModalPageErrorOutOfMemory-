var frames = require("ui/frame");

var topFrame = frames.topmost();
var page;
var closeCallback;

function onShownModallyChoose(args) {
	console.log("Choose onShownModally");
	closeCallback = args.closeCallback;
}
exports.onShownModallyChoose = onShownModallyChoose;

// Code to run when the page loads
exports.pageLoaded = function (args) {
    // Make sure we're on iOS before configuring the navigation bar 
};

exports.onNavigatedTo = function (args) {
    page = args.object;
    page.actionBarHidden = true;
};
  

function GoBack(args) {
    topFrame.goBack();
}
exports.GoBack = GoBack;

function gotoParentLogin(args)
{
    console.log("tap clicked");
    closeCallback("Parent");
    //frames.topmost().navigate("./Login/nemID");  
}
exports.gotoParentLogin = gotoParentLogin;

function gotoStaffLogin(args)
{
    closeCallback("Staff");
    //frames.topmost().navigate("./Login/login");  
}
exports.gotoStaffLogin = gotoStaffLogin;
