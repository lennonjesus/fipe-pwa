!function(e){function o(t){if(n[t])return n[t].exports;var i=n[t]={exports:{},id:t,loaded:!1};return e[t].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}var n={};return o.m=e,o.c=n,o.p="",o(0)}([function(e,o,n){n(3),n(2),n(1),n(4),e.exports=n(5)},function(e,o){"use strict";!function(){angular.module("fipepwa").config(["$mdAriaProvider",function(e){e.disableWarnings()}])}()},function(e,o){"use strict";!function(){angular.module("fipepwa",["ngMaterial"])}()},function(e,o){"use strict";"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then(function(){console.log("Service Worker Registered")})},function(e,o){"use strict";!function(){function e(e){function o(o){return e.get(c+"/"+o+"/marcas.json").then(function(e){return e.data})}function n(o,n){return e.get(c+"/"+o+"/veiculos/"+n+".json").then(function(e){return e.data})}function t(o,n,t){return e.get(c+"/"+o+"/veiculo/"+n+"/"+t+".json").then(function(e){return e.data})}function i(o,n,t,i){return e.get(c+"/"+o+"/veiculo/"+n+"/"+t+"/"+i+".json").then(function(e){return e.data})}var c="https://fipeapi.appspot.com/api/1",r={loadFabricantes:o,loadAnosModelo:t,loadDadosVeiculo:i,loadModelos:n};return r}e.$inject=["$http"],angular.module("fipepwa").factory("FipeService",e)}()},function(e,o){"use strict";!function(){function e(e){function o(){r.tipos=[{value:"motos",label:"Moto",icon:"motorcycle"},{value:"carros",label:"Carro",icon:"directions_car"}],r.veiculo={},r.fabricantes=[],r.modelos=[],r.anosModelo=[],r.veiculos=[],r.selectedTipoVeiculo=null,r.selectedFabricanteId=null,r.selectedModeloId=null,r.selectedAnoModeloId=null,r.selectedVeiculo=null}function n(){r.fabricantes=[];var o=e.loadFabricantes(r.selectedTipoVeiculo).then(function(e){e.forEach(function(e){r.fabricantes.push({id:e.id,name:e.name})})});return o}function t(){r.modelos=[];var o=e.loadModelos(r.selectedTipoVeiculo,r.selectedFabricanteId).then(function(e){e.forEach(function(e){r.modelos.push({id:e.id,name:e.name})})});return o}function i(){r.anosModelo=[];var o=e.loadAnosModelo(r.selectedTipoVeiculo,r.selectedFabricanteId,r.selectedModeloId).then(function(e){e.forEach(function(e){r.anosModelo.push({id:e.id,name:e.name})})});return o}function c(){r.selectedVeiculo={};var o=e.loadDadosVeiculo(r.selectedTipoVeiculo,r.selectedFabricanteId,r.selectedModeloId,r.selectedAnoModeloId).then(function(e){r.selectedVeiculo=e});return o}var r=this;r.init=o,r.loadFabricantes=n,r.loadModelos=t,r.loadAnosModelo=i,r.loadDadosVeiculo=c,r.init()}e.$inject=["FipeService"],angular.module("fipepwa").controller("HomeController",e)}()}]);