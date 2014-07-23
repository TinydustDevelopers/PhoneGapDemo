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
  $scope.statusbar = statusbar;

  $scope.accl = {
    x: '未获取',
    y: '未获取',
    z: '未获取'
  };
  $scope.getAccl = function () {
    navigator.accelerometer.getCurrentAcceleration(function (accl) {
      $scope.accl = accl;
    }, function (err) {
      if (err) {
        alert(err.msg);
      }
    });
  };
});
