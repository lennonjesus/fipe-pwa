!function(e){function o(t){if(n[t])return n[t].exports;var i=n[t]={exports:{},id:t,loaded:!1};return e[t].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}var n={};return o.m=e,o.c=n,o.p="",o(0)}([function(e,o,n){n(3),n(2),n(1),n(4),e.exports=n(5)},function(e,o){"use strict";!function(){angular.module("fipepwa").config(["$mdAriaProvider",function(e){e.disableWarnings()}])}()},function(e,o){"use strict";!function(){angular.module("fipepwa",["ngMaterial"])}()},function(e,o){"use strict";"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then(function(){console.log("Service Worker Registered")})},function(e,o){"use strict";!function(){function e(e){function o(){return e.get(r+"/motos/marcas.json").then(function(e){return e.data})}function n(o){return e.get(r+"/motos/veiculos/"+o+".json").then(function(e){return e.data})}function t(o,n){return e.get(r+"/motos/veiculo/"+o+"/"+n+".json").then(function(e){return e.data})}function i(o,n,t){return e.get(r+"/motos/veiculo/"+o+"/"+n+"/"+t+".json").then(function(e){return e.data})}var r="https://fipeapi.appspot.com/api/1",a={loadFabricantes:o,loadAnosModelo:t,loadDadosVeiculo:i,loadModelos:n};return a}e.$inject=["$http"],angular.module("fipepwa").factory("FipeService",e)}()},function(e,o){"use strict";!function(){function e(e){function o(){a.loadFabricantes(),a.veiculo={},a.fabricantes=[],a.modelos=[],a.anosModelo=[],a.veiculos=[],a.selectedFabricanteId=null,a.selectedModeloId=null,a.selectedAnoModeloId=null,a.selectedVeiculo=null}function n(){var o=e.loadFabricantes().then(function(e){e.forEach(function(e){a.fabricantes.push({id:e.id,name:e.name})})});return o}function t(){a.modelos=[];var o=e.loadModelos(a.selectedFabricanteId).then(function(e){e.forEach(function(e){a.modelos.push({id:e.id,name:e.name})})});return o}function i(){a.anosModelo=[];var o=e.loadAnosModelo(a.selectedFabricanteId,a.selectedModeloId).then(function(e){e.forEach(function(e){a.anosModelo.push({id:e.id,name:e.name})})});return o}function r(){a.selectedVeiculo={};var o=e.loadDadosVeiculo(a.selectedFabricanteId,a.selectedModeloId,a.selectedAnoModeloId).then(function(e){a.selectedVeiculo=e});return o}var a=this;a.init=o,a.loadFabricantes=n,a.loadModelos=t,a.loadAnosModelo=i,a.loadDadosVeiculo=r,a.init()}e.$inject=["FipeService"],angular.module("fipepwa").controller("HomeController",e)}()}]);
