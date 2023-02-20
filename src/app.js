window.onload = function() {
  //write your code here
  const pronoum = ["the", "our"];
  const adjt = ["great", "big"];
  const subjet = ["jogger", "racoon"];
  const extension = [".com", ".es", ".net"];
  getGenerator(pronoum, adjt, subjet, extension);
};
const getGenerator = (pronoum, adjt, subjet, extension) => {
  for (let i = 0; i < pronoum.length; i++) {
    for (let a = 0; a < adjt.length; a++) {
      for (let b = 0; b < subjet.length; b++) {
        for (let c = 0; c < extension.length; c++) {
          console.log(`${pronoum[i]}${adjt[a]}${subjet[b]}${extension[c]}`);
        }
      }
    }
  }
};
