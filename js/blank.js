window.addEventListener('load', () => {
  const input = document.getElementById("input-text");
  const output = document.getElementsByClassName("display-answer")[0];
  const run = document.querySelector("div.play-ground button");
  run.addEventListener('click', () => {
    //compress(input, output);
    username(input, output);
  }, false);
});

const username = (input, output) => {
    const s = input.value;
    let arr = s.split(', ');
    let len = arr.length;
    let recordMap = new Map();
    for(let i = 0; i < len; i++){
        if(recordMap.get(arr[i]) === undefined){
            recordMap.set(arr[i], 0);
        }
        else{
            recordMap.set(arr[i], recordMap.get(arr[i]) + 1);
            arr[i] += recordMap.get(arr[i]);
        }
    }
    console.log(arr);
    const result = arr.join(', ');
    output.innerHTML = result;
}

const compress = (input, output) => {
    const s = input.value;
    let len = s.length;
    if(len <= 1){
        output.innerHTML = s;
        return;
    }
    //aabcccd
    let prev = s[0];
    let count = 1;
    let result = prev;
    for(let i = 1; i < len; i++) {
      if(s[i] === prev){
          count++;
          continue;
      }
      else{
          if(count !== 1){
              result += count;
              count = 1;
              
          }
          prev = s[i];
          result += prev;
      }
    }
    if(count !== 1){
        result += count;
    }
    output.innerHTML = result;
}