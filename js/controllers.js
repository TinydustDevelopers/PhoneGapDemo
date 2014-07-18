angular.module('lydiagapdemo.controllers', [])

.controller('homeCtrl', function ($scope) {
  $scope.vibrate = function () {
    navigator.notification.vibrate();
  };

  var statusbar = {};
  statusbar.hidden = !StatusBar.isVisible;
  statusbar.toggle = function () {
    if (!statusbar.hidden) {
      statusbar.hidden = true;
      StatusBar.hide();
    } else {
      statusbar.hidden = false;
      StatusBar.show();
    }
  };

});
