setTimeout(() => {
  console.log('setTImeout');
}, 0);

function foo() {
  console.log('promise');
  return Promise.resolve().then(() => foo());
}

foo();
