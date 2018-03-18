export function openCalculator() {
  return {
    type: 'OPEN_CALCULATOR',
    payload: true,
  };
}

export function closeCalculator() {
  return {
    type: 'CLOSE_CALCULATOR',
    payload: false,
  };
}

