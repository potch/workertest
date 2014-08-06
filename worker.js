addEventListener('message', function(e) {
  // evaluate === of graph nodes;
  var a = e.data;
  console.log('now we are in the worker.');
  console.log('let\'s check that relationship again:', a.left.right === a.right.left);
  // send it back for extra checking
  console.log('we postMessage the graph back *again*, to be sure');
  postMessage(a);
});
