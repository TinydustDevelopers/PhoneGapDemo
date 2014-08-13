angular.module('lydiagapdemo.controllers', [])

.controller('homeCtrl', function ($scope) {
  if (!navigator.accelerometer) {
    alert('请使用最新版的LydiaBox，并使用非试用模式以获得完整的功能');
  }

  document.addEventListener('deviceready', function () {
    var statusbar = {};
    var accelerometer = {};

    $scope.accl = {
      x: '未获取',
      y: '未获取',
      z: '未获取'
    };

    $scope.vibrate = function () {
      navigator.notification.vibrate();
    };

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

    accelerometer.listening = false;

    accelerometer.enable = function () {
      accelerometer.watchId = navigator.accelerometer.watchAcceleration(function (accl) {
        $scope.accl.x = accl.x;
        $scope.accl.y = accl.y;
        $scope.accl.z = accl.z;
        $scope.$apply();
      }, function (err) {
        console.log(err.message);
      });
    };

    accelerometer.disable = function () {
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
