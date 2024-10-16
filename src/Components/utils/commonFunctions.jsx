
export const DebounceFunction = (func, delay)=>{
   let timer;
   return function (...args){
    if(timer){
        clearTimeout(timer);
    } 
    timer = setTimeout(function (){
        func.apply(this,args);
    },delay)
   }
}

export const ThrottlingFunction = (func, interval)=>{
    let isRunning = false;
    return function (...args){
     if(!isRunning){
        isRunning = true;
        func.apply(this,args);
        setTimeout(()=>{
            isRunning = false;
        },interval)
     }
    }
}