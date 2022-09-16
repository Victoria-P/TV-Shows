export const sortByProp = (arr: Array<any>, prop: string) => {
  const props = prop.split(".");
  const getValue = (item: any) => {
    let val = item;
    props.forEach((p) => {
      val = val[p];
    });
    return val;
  };
  return [...arr].sort((a, b) => {
    if (getValue(a) == getValue(b)) return 0;
    return getValue(a) < getValue(b) ? 1 : -1;
  });
};
