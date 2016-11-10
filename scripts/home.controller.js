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

      vm.tipos = [
        { value: 'motos', label: 'Moto', icon: 'motorcycle' },
        { value: 'carros', label: 'Carro', icon: 'directions_car' }
      ];

      vm.veiculo = {};
      vm.fabricantes = [];
      vm.modelos = [];
      vm.anosModelo = [];
      vm.veiculos = [];

      vm.selectedTipoVeiculo = null;
      vm.selectedFabricanteId = null;
      vm.selectedModeloId = null;
      vm.selectedAnoModeloId = null;
      vm.selectedVeiculo = null;

    }

    function loadFabricantes() {
      vm.fabricantes = [];

      var promise = FipeService.loadFabricantes(vm.selectedTipoVeiculo).then(data => {
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

      var promise = FipeService.loadModelos(vm.selectedTipoVeiculo, vm.selectedFabricanteId).then(data => {
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

      var promise = FipeService.loadAnosModelo(vm.selectedTipoVeiculo, vm.selectedFabricanteId, vm.selectedModeloId).then(data => {
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

      var promise = FipeService.loadDadosVeiculo(vm.selectedTipoVeiculo, vm.selectedFabricanteId, vm.selectedModeloId, vm.selectedAnoModeloId).then(data => {
        vm.selectedVeiculo = data;
      });

      return promise;
    }

}
})();
