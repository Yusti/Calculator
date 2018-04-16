import {
  OPEN_CALCULATOR,
  CLOSE_CALCULATOR,
} from './constants';

export function openCalculator() {
  return {
    type: OPEN_CALCULATOR,
    payload: true,
  };
}

export function closeCalculator() {
  return {
    type: CLOSE_CALCULATOR,
    payload: false,
  };
}

