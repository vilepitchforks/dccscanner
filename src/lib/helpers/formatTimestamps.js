exports.formatTs = timestamp => {
  const addZero = d => (d = d > 9 ? d : "0" + d);

  const month = addZero(new Date(timestamp).getMonth() + 1);
  const day = addZero(new Date(timestamp).getDate());
  const hour = addZero(new Date(timestamp).getHours());
  const minute = addZero(new Date(timestamp).getMinutes());
  const second = addZero(new Date(timestamp).getSeconds());

  return `${day}-${month} ${hour}-${minute}-${second}`;
};
