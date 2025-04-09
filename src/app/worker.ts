let count:number = 0;
let result:any={};
addEventListener('message', ({ data }) => {
    console.log(data);
    // Perform some CPU-intensive task
    // const result = performHeavyTask(data);
    // postMessage(result);
    apiCall();
  });
  
  function performHeavyTask(data: any): any {
    // Simulated heavy task
    let result = 0;
    for (let i = 0; i < data; i++) {
     result += Math.sqrt(i);
    }
    return result;
  }

  function apiCall(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
        return res.json()
    }).then(a=>{
        console.log(a);
        result[count] = a;
        count++;
        if(count < 3){
            apiCall();
        } else {
            postMessage(result);
        }
    })
  }