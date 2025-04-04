function removeProperty(obj: { [k: string]: any }, prop: string) {
  return Object.keys(obj).indexOf(prop) > -1 ? delete obj[prop] : false;
}
