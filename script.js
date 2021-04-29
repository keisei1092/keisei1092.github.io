// Array.some() をサポートしていないブラウザに対応
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: https://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(fun, thisArg) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}

/** ページの一番上に国旗を表示する
 *  flag クラスがデフォルトで display: none; になっているのを block に変える
 */ 
const addFlagToTitle = () => {
  const japaneseFlag = document.getElementById("japanese-flag");
  japaneseFlag.style.display = "block";
};

const isHoliday = () => {
  const today = new Date();

  // 祝日を追加していく
  const holidays = [
    { month: 0, date: 1 }, // 元日
    { month: 1, date: 11 }, // 建国記念の日
    { month: 1, date: 23 }, // 天皇誕生日
    { month: 3, date: 29 }, // 昭和の日
    { month: 4, date: 3 }, // 憲法記念日
    { month: 4, date: 4 }, // みどりの日
    { month: 4, date: 5 }, // こどもの日
    { month: 10, date: 23 }, // 勤労感謝の日
  ];

  return holidays.some(holiday => holiday.month === today.getMonth() && holiday.date === today.getDate());
};

if (isHoliday()) addFlagToTitle();
