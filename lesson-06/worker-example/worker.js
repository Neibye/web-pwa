self.onmessage = function (e) {
  doHardWork();
  console.log(e.data);
};

function doHardWork() {
  let start = Date.now();
  console.log("Blocking...");
  while (Date.now() < start + 3000) {}
  console.log("Unblocked!");
}
