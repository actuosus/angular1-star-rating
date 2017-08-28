!function(t){function e(s){if(r[s])return r[s].exports;var i=r[s]={exports:{},id:s,loaded:!1};return t[s].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(1);var s=r(2),i=r(3),a=r(2);e.StarRatingController=a.StarRatingController;var l=r(3);e.StarRatingComponent=l.StarRatingComponent,e.angularStars=angular.module("star-rating",[]).controller("starRatingCtrl",s.StarRatingController).component("starRatingComp",new i.StarRatingComponent).name},function(t,e){t.exports=angular},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.classEmpty=t.DefaultClassEmpty,this.classHalf=t.DefaultClassHalf,this.classFilled=t.DefaultClassFilled,this.pathEmpty=t.DefaultSvgPathEmpty,this.pathHalf=t.DefaultSvgPathHalf,this.pathFilled=t.DefaultSvgPathFilled,this._showHoverStars=t.DefaultShowHoverStars,this.labelHidden=t.DefaultLabelHidden,this._numOfStars=t.DefaultNumOfStars,this.stars=t._getStarsArray(this.numOfStars),this.setColor()}return t._getStarsArray=function(t){for(var e=[],r=0;r<t;r++)e.push(r+1);return e},t._getHalfStarVisible=function(t){return Math.abs(t%1)>0},t._getColor=function(t,e,r){if(t=t||0,r)return r;var s=e/3,i="default";return t>0&&(i="negative"),t>s&&(i="ok"),t>2*s&&(i="positive"),i},Object.defineProperty(t.prototype,"numOfStars",{get:function(){return this._numOfStars||t.DefaultNumOfStars},set:function(e){this._numOfStars=e>0?e:t.DefaultNumOfStars,this.stars=t._getStarsArray(this.numOfStars),this.setColor()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rating",{get:function(){return this._rating},set:function(t){if(void 0!==t){var e=0;t>=0&&t<=this.numOfStars&&(e=t),t>this.numOfStars&&(e=this.numOfStars),this._rating=e,this.ratingAsInteger=parseInt(this._rating.toString()),this.setHalfStarVisible(),this.setColor();var r={rating:this._rating};"function"==typeof this.onRatingChange&&this.onRatingChange({$event:r})}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showHalfStars",{get:function(){return this._showHalfStars},set:function(t){this._showHalfStars=!!t,this.setHalfStarVisible()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showHoverStars",{get:function(){return this._showHoverStars},set:function(t){this._showHoverStars=!!t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=!!t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"readOnly",{get:function(){return this._readOnly},set:function(t){this._readOnly=!!t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"space",{get:function(){return this._space},set:function(t){this._space=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"starType",{get:function(){return this._starType},set:function(e){this._starType=e||t.DefaultStarType},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._size},set:function(e){this._size=e||t.DefaultSize},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"speed",{get:function(){return this._speed},set:function(e){this._speed=e||t.DefaultSpeed},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelPosition",{get:function(){return this._labelPosition},set:function(e){this._labelPosition=e||t.DefaultLabelPosition},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelHidden",{get:function(){return this._labelHidden},set:function(t){this._labelHidden=!!t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"staticColor",{get:function(){return this._staticColor},set:function(t){this._staticColor=t||void 0,this.setColor()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelText",{get:function(){return this._labelText},set:function(t){this._labelText=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"id",{get:function(){return this._id},set:function(t){this._id=t||(1e4*Math.random()).toString()},enumerable:!0,configurable:!0}),t.prototype.getComponentClassNames=function(){var t=[];return t.push(this.rating?"value-"+this.ratingAsInteger:"value-0"),t.push(this.showHoverStars?"hover":""),t.push(this.hoverRating?"hover-"+this.hoverRating:"hover-0"),t.push(this.halfStarVisible?"half":""),t.push(this.space?"space-"+this.space:""),t.push(this.labelHidden?"label-hidden":"label-visible"),t.push(this.labelPosition?"label-"+this.labelPosition:""),t.push(this.color?"color-"+this.color:""),t.push(this.starType?"star-"+this.starType:""),t.push(this.speed),t.push(this.size),t.push(this.readOnly?"read-only":""),t.push(this.disabled?"disabled":""),t.join(" ")},t.prototype.svgVisible=function(){return"svg"===this.starType},t.prototype.setColor=function(){"function"==typeof this.getColor?this.color=this.getColor(this.rating,this.numOfStars,this.staticColor):this.color=t._getColor(this.rating,this.numOfStars,this.staticColor)},t.prototype.setHalfStarVisible=function(){this.showHalfStars?"function"==typeof this.getHalfStarVisible?this.halfStarVisible=this.getHalfStarVisible(this.rating):this.halfStarVisible=t._getHalfStarVisible(this.rating):this.halfStarVisible=!1},t.prototype.$onChanges=function(t){var e=function(t,e){return t in e&&e[t].currentValue!=e[t].previousValue};e("getColor",t)&&(this.getColor=t.getColor.currentValue,this.setColor()),e("getHalfStarVisible",t)&&(this.getHalfStarVisible=t.getHalfStarVisible.currentValue,this.setHalfStarVisible()),e("showHalfStars",t)&&(this.showHalfStars=t.showHalfStars.currentValue),e("showHoverStars",t)&&(this.showHoverStars=t.showHoverStars.currentValue),e("space",t)&&(this.space=t.space.currentValue),e("readOnly",t)&&(this.readOnly=t.readOnly.currentValue),e("disabled",t)&&(this.disabled=t.disabled.currentValue),e("labelHidden",t)&&(this.labelHidden=t.labelHidden.currentValue),e("rating",t)&&(this.rating=t.rating.currentValue),e("numOfStars",t)&&(this.numOfStars=t.numOfStars.currentValue),e("labelText",t)&&(this.labelText=t.labelText.currentValue),e("staticColor",t)&&(this.staticColor=t.staticColor.currentValue),e("size",t)&&(this.size=t.size.currentValue),e("speed",t)&&(this.speed=t.speed.currentValue),e("labelPosition",t)&&(this.labelPosition=t.labelPosition.currentValue),e("starType",t)&&(this.starType=t.starType.currentValue)},t.prototype.onStarClicked=function(t){if(this.interactionPossible()){this.rating=t;var e={rating:t};"function"==typeof this.onClick&&this.onClick({$event:e})}},t.prototype.onStarHover=function(t){if(this.interactionPossible()&&this.showHoverStars){this.hoverRating=t?parseInt(t.toString()):0;var e={hoverRating:this.hoverRating};"function"==typeof this.onHover&&this.onHover({$event:e})}},t.prototype.interactionPossible=function(){return!this.readOnly&&!this.disabled},t.prototype.getClosest=function(t,e){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),r=e.length;--r>=0&&e.item(r)!==this;);return r>-1});t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null},t.DefaultClassEmpty="default-star-empty-icon",t.DefaultClassHalf="default-star-half-icon",t.DefaultClassFilled="default-star-filled-icon",t.DefaultNumOfStars=5,t.DefaultShowHoverStars=!1,t.DefaultSize="medium",t.DefaultSpeed="noticeable",t.DefaultLabelPosition="left",t.DefaultLabelHidden=!1,t.DefaultStarType="svg",t.DefaultAssetsPath="assets/images/",t.DefaultSvgPath=t.DefaultAssetsPath+"star-rating.icons.svg",t.DefaultSvgEmptySymbolId="star-empty",t.DefaultSvgHalfSymbolId="star-half",t.DefaultSvgFilledSymbolId="star-filled",t.DefaultSvgPathEmpty=t.DefaultSvgPath+"#"+t.DefaultSvgEmptySymbolId,t.DefaultSvgPathHalf=t.DefaultSvgPath+"#"+t.DefaultSvgHalfSymbolId,t.DefaultSvgPathFilled=t.DefaultSvgPath+"#"+t.DefaultSvgFilledSymbolId,t}();e.StarRatingController=r},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(2),i=r(4),a=function(){function t(){this.bindings={id:"<",rating:"<",showHalfStars:"<",showHoverStars:"<",numOfStars:"<",size:"<",space:"<",staticColor:"<",disabled:"<",starType:"<",labelText:"<",labelHidden:"<",labelPosition:"<",speed:"<",readOnly:"<",getColor:"<",getHalfStarVisible:"<",onHover:"&",onClick:"&",onRatingChange:"&"},this.replace=!0,this.controller=s.StarRatingController,this.templateUrl=i}return t}();e.StarRatingComponent=a},function(t,e){var r="src/star-rating.tpl.html",s='<div id={{$ctrl.id}} class=rating ng-class=$ctrl.getComponentClassNames()> <div ng-show=$ctrl.labelText class=label-value>{{$ctrl.labelText}}</div> <div class=star-container ng-mouseleave=$ctrl.onStarHover()> <div class=star ng-repeat="star in $ctrl.stars track by $index" ng-click=$ctrl.onStarClicked(star) ng-mouseover=$ctrl.onStarHover(star)> <i class="star-empty {{$ctrl.classEmpty}}" ng-if=!$ctrl.svgVisible()></i> <i class="star-half {{$ctrl.classHalf}}" ng-if=!$ctrl.svgVisible()></i> <i class="star-filled {{$ctrl.classFilled}}" ng-if=!$ctrl.svgVisible()></i> <svg class="star-empty {{$ctrl.classEmpty}}" ng-if=$ctrl.svgVisible()> <use xmlns:xlink=http://www.w3.org/1999/xlink xlink:href={{$ctrl.pathEmpty}}></use> </svg> <svg class="star-half {{$ctrl.classHalf}}" ng-if=$ctrl.svgVisible()> <use xmlns:xlink=http://www.w3.org/1999/xlink xlink:href={{$ctrl.pathHalf}}></use> </svg> <svg class="star-filled {{$ctrl.classFilled}}" ng-if=$ctrl.svgVisible()> <use xmlns:xlink=http://www.w3.org/1999/xlink xlink:href={{$ctrl.pathFilled}}></use> </svg> </div> </div> </div>';window.angular.module("ng").run(["$templateCache",function(t){t.put(r,s)}]),t.exports=r}]);
//# sourceMappingURL=index.js.map