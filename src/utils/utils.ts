export const debounce = (fn: () => void, delay: number) => {
  let timerId: number = 0;

  return (e: any) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn();
    }, delay);
  };
};
