const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

   const vari ="developer";
    // Regular
    console.log("hello");


    // Interpolated
    console.log(`hello i am a good ${vari}`);


    // Styled
    console.log('%ci am great ','font-size : 50px');

    // warning!
console.warn("oh no");

    // Error :|
console.error('eroor encountered');

    // Info
console.info('information received');

    // Testing
console.assert(1===1);
console.assert(1===3);

    // clearing

    // console.clear();

    // Viewing DOM Elements
const p = document.querySelector('p');

console.log(p);
// console.dir(p);

    // Grouping together

    dogs.forEach((e)=>{
        console.log(e.name);
    })

    // counting
    var cnt =0;
dogs.forEach((e)=>{
    cnt++;
})

console.log(cnt);



console.count('wes');

    // timing


console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });



// console.table(dogs);