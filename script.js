// ページの一番上に国旗を表示する
const addFlagToTitle = () => {
  const japaneseFlag = document.getElementById("japanese-flag");
  japaneseFlag.style.display = "block";
};

const isHoliday = () => {
  // 暫定で元旦、建国記念の日、勤労感謝の日かどうかだけ判別する
  const today = new Date();
  return (
    (today.getMonth() === 10 && today.getDate() === 23) ||
    (today.getMonth() === 0 && today.getDate() === 1) ||
    (today.getMonth() === 1 && today.getDate() === 11)
  );
};

if (isHoliday()) addFlagToTitle();