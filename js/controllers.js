angular.module('lydiagapdemo.controllers', [])

.controller('homeCtrl', function ($scope) {
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
        accelerometer.listening = false;
        accelerometer.disable();
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

    var social = {};

    social.shareWechat = function () {
      window.plugins.socialsharing.shareViaWeChat('告诉你一个秘密', 'Hello, world', location.href, function () {
        console.log('分享成功');
      }, function (err) {
        console.log(err.message);
      });
    };

    social.shareTimeLine = function () {
      window.plugins.socialsharing.shareViaWeChatTimeLine('我特么也能击败全国99%的人', '就是title么，谁不会', location.href, function () {
        console.log('分享成功');
      }, function (err) {
        console.log(err.message);
      });
    };

    social.shareWeibo = function () {
      window.plugins.socialsharing.shareViaWeibo('微博标题', '微博内容', location.href, function () {
        console.log('分享成功');
      }, function (err) {
        console.log(err.message);
      });
    };

    social.shareThis = function () {
      window.plugins.socialsharing.shareCurrentPage();
    };

    $scope.social = social;
  });
});
