

var modalPage = "./app/choose";
function onNavigatingTo(args) {
    var page = args.object;
}
exports.onNavigatingTo = onNavigatingTo;
exports.onTap = function(args){
    var page = args.object.page;
    page.showModal(modalPage,"Context from showModal", function (test) {
        console.log(test);
    }, true);
}