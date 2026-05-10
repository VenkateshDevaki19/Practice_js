function delayfunc(callback) {
  setTimeout(() => {
    console.log("Added delayed execution");
    callback();
  }, 2000);
}

delayfunc(() => {
  console.log("Callback Executed");
});
