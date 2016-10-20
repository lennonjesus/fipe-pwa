(function () {

  'use strict';

  angular.module('fipepwa').controller('HomeController', homeController);

  function homeController(FipeService) {

    /*jshint validthis:true */
    var vm = this;

    vm.init = init;
    vm.loadFabricantes = loadFabricantes;
    vm.loadModelos = loadModelos;
    vm.loadAnosModelo = loadAnosModelo;
    vm.loadDadosVeiculo = loadDadosVeiculo;

    vm.init();

    function init() {
      vm.loadFabricantes();

      vm.veiculo = {};
      vm.fabricantes = [];
      vm.modelos = [];
      vm.anosModelo = [];
      vm.veiculos = [];

      vm.selectedFabricanteId = null;
      vm.selectedModeloId = null;
      vm.selectedAnoModeloId = null;
      vm.selectedVeiculo = null;

    }

    function loadFabricantes() {
      var promise = FipeService.loadFabricantes().then(data => {
        data.forEach(elm => {
          vm.fabricantes.push({
            id: elm.id,
            name: elm.name
          });
        });
      });

      return promise;
    }

    function loadModelos() {
      vm.modelos = [];

      var promise = FipeService.loadModelos(vm.selectedFabricanteId).then(data => {
        data.forEach(elm => {
          vm.modelos.push({
            id: elm.id,
            name: elm.name
          });
        });
      });

      return promise;
    }

    function loadAnosModelo() {
      vm.anosModelo = [];

      var promise = FipeService.loadAnosModelo(vm.selectedFabricanteId, vm.selectedModeloId).then(data => {
        data.forEach(elm => {
          vm.anosModelo.push({
            id: elm.id,
            name: elm.name
          });
        });
      });

      return promise;
    }

    function loadDadosVeiculo() {
      vm.selectedVeiculo = {};

      var promise = FipeService.loadDadosVeiculo(vm.selectedFabricanteId, vm.selectedModeloId, vm.selectedAnoModeloId).then(data => {
        vm.selectedVeiculo = data;
      });

      return promise;
    }

}
})();
