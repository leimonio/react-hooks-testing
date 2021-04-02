export function fetchCount() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * Math.floor(100)));
    }, 2000);
  });
}
