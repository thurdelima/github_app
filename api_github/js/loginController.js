angular.module('app', ['ui.mask'])
.controller('loginController', function($scope, $http){


  $scope.usuario = "";




  $scope.mostraResult = false;
  $scope.mostraBusca = true;

  $scope.res = "";

  $scope.voltar = function(){
    $scope.mostraResult = false;
    $scope.mostraBusca = true;
    $scope.usuario = "";
  }


  $scope.fazerLogin = function(){

    if($scope.usuario.trim()==""){
      $.gritter.add({
        title: "Falha!",
        text: "Digitar usuario e senha.",
        class_name: "gritter"

      });
      return;
    }

    $http ({
        method: 'GET',
        url: 'https://api.github.com/users/'+$scope.usuario,
        headers: {'content-type': 'application/x-www-form-urlencoded'}



      }).then(function(response){
          // console.log(response);

          if(response){
            // window.location = "perfil.html";


              $scope.res = response.data;
              $.gritter.add({
                title: "Sucesso!",
                text: "Dados: "+$scope.res.login,
                class_name: "gritter"

              });
                      $scope.mostraBusca = false;
                      $scope.mostraResult = true;



          }else{
            $.gritter.add({
              title: "Falha!",
              text: "Usuário não existe.",
              class_name: "gritter"

            });
          }

      },function error(response){
        $.gritter.add({
          title: "Falha!",
          text: "Usuário não existe.",
          class_name: "gritter"

        });
      });

  }


});
