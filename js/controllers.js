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

    $scope.accl = {
      x: '未获取',
      y: '未获取',
      z: '未获取'
    };
    
    var accelerometer = {};

    accelerometer.listening = false;

    accelerometer.enable = function () {
      console.log('enable');
      accelerometer.watchId = navigator.accelerometer.watchAcceleration(function (accl) {
        console.log('success callback called.');
        console.log('x:' + accl.x);
        console.log('y:' + accl.y);
        console.log('z:' + accl.z);
        $scope.accl = accl;
      }, function (err) {
        console.log(err.message);
      });
    };

    accelerometer.disable = function () {
      console.log('disable');
      navigator.accelerometer.clearWatch(accelerometer.watchId);
    };

    accelerometer.toggle = function () {
      if (accelerometer.listening) {
        accelerometer.listening = false;
        accelerometer.disable();
      } else {
        accelerometer.listening = true;
        accelerometer.enable();
      }
    };

    $scope.accelerometer = accelerometer;
  });
});
