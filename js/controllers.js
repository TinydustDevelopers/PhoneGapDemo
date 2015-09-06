angular.module('lydiagapdemo.controllers', [])

.controller('homeCtrl', function ($scope) {
  $scope.vibrate = function () {
    navigator.vibrate();
  };

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

  $scope.notifyMe = function () {
    if (!("Notification" in window)) {
      return alert('请使用1.0或以上版本来打开此web app以获得消息通知功能');
    }

    Notification.requestPermission(function (status) {
      if (status === 'granted') {
        var notification = new Notification('Hi there!', {
          icon: 'http://cdn.lydiabox.com/images/1407001318444.png'
        });

        setTimeout(function () {
          notification.close();
        }, 1000);
      }
    });
  };
});
