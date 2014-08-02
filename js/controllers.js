angular.module('lydiagapdemo.controllers', [])

.controller('homeCtrl', function ($scope) {
  document.addEventListener('deviceready', function () {
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

    var accelerometer = {};

    accelerometer.listening = false;

    accelerometer.enable = function () {
      accelerometer.watchId = navigator.accelerometer.watchAcceleration(function (accl) {
        accelerometer.accl = accl;
      }, function (err) {
        console.log(err.msg);
      });
    };

    accelerometer.disable = function () {
      navigator.accelerometer.clearWatch(accelerometer.watchId);
    };

    accelerometer.toggle = function () {
      if (accelerometer.listening) {
        accelerometer.disable();
        accelerometer.listening = false;
      } else {
        accelerometer.enable();
        accelerometer.listening = true;
      }
    };

    accelerometer.accl = {
      x: '未获取',
      y: '未获取',
      z: '未获取'
    };

    $scope.accelerometer = accelerometer;
  });
});
