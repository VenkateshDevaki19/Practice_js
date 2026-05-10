// rejection example

function paymentStatus(status) {
  return new promise((resolve, reject) => {
    if (status === "Success") {
      resolve("Payment Success");
    } else {
      reject("payment failed");
    }
  });
}

paymentStatus("failed")
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

//output : payment failed