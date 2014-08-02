angular.module('lydiagapdemo.controllers', [])

.controller('homeCtrl', function ($scope) {
  var statusbar = {};
  var accelerometer = {};
  
  $scope.accl = {
    x: '未获取',
    y: '未获取',
    z: '未获取'
  };

  document.addEventListener('deviceready', function () {
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

        console.log('after x: ' + $scope.accl.x);
        console.log('y: ' + $scope.accl.y);
        console.log('z: ' + $scope.accl.z);
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
