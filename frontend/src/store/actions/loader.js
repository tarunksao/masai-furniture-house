export function changeLoader(status) {
  return {
    type: 'SET_LOADER',
    payload: status,
  };
}
