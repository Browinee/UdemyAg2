"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var ObservComponent = (function () {
    function ObservComponent() {
        var keyups = Rx_1.Observable.fromEvent($('#search'), 'keyup')
            .map(function (e) { return e.target.value; })
            .filter(function (text) { return text.length >= 3; })
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(function (searchTern) {
            var url = "https://api.spotify.com/vi/search?type=artist&q=" + searchTern;
            var promise = $.getJSON(url);
            return Rx_1.Observable.fromPromise(promise);
        });
        keyups.subscribe(function (data) { return console.log(data); });
    }
    ObservComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'observ',
            templateUrl: 'observ.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ObservComponent);
    return ObservComponent;
}());
exports.ObservComponent = ObservComponent;
//  var debounced =_.debounce(function(text){
//    var url="https://api.spotify.com/vi/search?type=artist&q="+text;
//   $.getJSON(url,function(artists){
//     console.log(artists);
//   })
//  },400);
// $('#search').keyup(function(e){
//   var text = e.target.value;
//   if(text.length<3)
//       return
//    debounced(text);
//# sourceMappingURL=observ.component.js.map