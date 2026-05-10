// real-time API simulation

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Venkatesh",
      });
    }, 2000);
  });
}

fetchUser().then((user) => {
  console.log(user);
});
