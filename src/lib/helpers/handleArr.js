export const chunkify = array => {
  return Array.from({ length: Math.ceil(array.length / 4) }, (_, i) => {
    const start = i * 4;
    return array.slice(start, start + 4);
  });
};

export const createTableData = dataRaw => {
  // Format needed for react-datasheet:
  // [
  //   [{value:  1}, {value:  3}],
  //   [{value:  2}, {value:  4}]
  // ]
  const title = Object.keys(dataRaw[0]).map(titleKey => ({ value: titleKey }));
  const bodyRaw = dataRaw.map(row => Object.values(row));
  const body = bodyRaw.map(row =>
    row.map(cell => ({
      value: Array.isArray(cell) ? JSON.stringify(cell) : cell
    }))
  );
  return [title, ...body];
};
