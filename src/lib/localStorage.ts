export function loadItem(item: string) {
  try {
    const serializedState = localStorage.getItem(item);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(`load from localStorage failed: ${e}`);
  }
}

export function saveItem(item: any, name: string) {
  try {
    const serializedState = JSON.stringify(item);
    localStorage.setItem(name, serializedState);
  } catch (e) {
    console.warn(`save to localStorage failed: ${e}`);
  }
}
