function step1(callback) {
  setTimeout(() => {
    console.log("Step1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("step2 Completed");
    callback();
  }, 2000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("step3 Completed");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});

// pass callback after completeing task

function task(callback) {
  console.log("Task completed");
  callback();
}

task(() => {
  console.log("Callback executed");
});
