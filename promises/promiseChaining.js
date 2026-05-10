// very very interview concept

function step1() {
  return promise.resolve("Step 1 completed");
}

function step2(data) {
  return promise.resolve(data + " -> step 2 completed");
}

function step3(data) {
  return promise.resolve(data + " -> Step3 completed");
}

step1()
  .then(step2)
  .then(step3)
  .then((result) => {
    console.log(result);
  });

//output: - step 1 Completed -> step 2 completed -> step3 completed