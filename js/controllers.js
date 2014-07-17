angular.module('lydiagapdemo.controllers', [])

.controller('homeCtrl', function ($scope) {
  $scope.vibrate = function () {
    navigator.notification.vibrate();
  };

  if (window.StatusBar) {
    var statusbar = {};
    statusbar.isVisible = StatusBar.isVisible;
    statusbar.toggle = function () {
      if (this.isVisible) {
        StatusBar.hide();
      } else {
        StatusBar.show();
      }
    };

    $scope.statusbar = statusbar;
  }
});
