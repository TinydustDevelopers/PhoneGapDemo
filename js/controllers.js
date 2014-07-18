angular.module('lydiagapdemo.controllers', [])

.controller('homeCtrl', function ($scope) {
  $scope.vibrate = function () {
    navigator.notification.vibrate();
  };

  var statusbar = {};
  statusbar.isVisible = StatusBar.isVisible;
  statusbar.toggle = function () {
    if (StatusBar.isVisible) {
      StatusBar.hide();
    } else {
      StatusBar.show();
    }
  };

  $scope.statusbar = statusbar;
});
