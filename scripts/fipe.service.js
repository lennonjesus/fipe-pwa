(function () {

  'use strict';

  angular.module('fipepwa').factory('FipeService', fipeService);

  function fipeService($http) {

    const URL_API = 'https://fipeapi.appspot.com/api/1';

    var service = {
      loadFabricantes: loadFabricantes,
      loadAnosModelo: loadAnosModelo,
      loadDadosVeiculo: loadDadosVeiculo,
      loadModelos: loadModelos
    };

    return service;

    function loadFabricantes(selectedTipoVeiculo) {
      return $http.get(`${URL_API}/${selectedTipoVeiculo}/marcas.json`)
        .then(json => json.data);
    }

    function loadModelos(selectedTipoVeiculo, selectedFabricanteId) {
      return $http.get(`${URL_API}/${selectedTipoVeiculo}/veiculos/${selectedFabricanteId}.json`)
        .then(json => json.data);
    }

    function loadAnosModelo(selectedTipoVeiculo, selectedFabricanteId, selectedModeloId) {
      return $http.get(`${URL_API}/${selectedTipoVeiculo}/veiculo/${selectedFabricanteId}/${selectedModeloId}.json`)
        .then(json => json.data);
    }

    function loadDadosVeiculo(selectedTipoVeiculo, selectedFabricanteId, selectedModeloId, selectedAnoModeloId) {
      return $http.get(`${URL_API}/${selectedTipoVeiculo}/veiculo/${selectedFabricanteId}/${selectedModeloId}/${selectedAnoModeloId}.json`)
        .then(json => json.data);
    }

  }

})();
