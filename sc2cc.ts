export const sc2cc = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};
