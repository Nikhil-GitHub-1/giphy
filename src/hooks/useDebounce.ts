import { useRef } from "react";
import { TimeOut } from "../types";

export const useDebouncedFn=(fn: any, delay: number = 500)=>{
    let timer = useRef<TimeOut>();
    function debouncedCall(...args: any){
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        fn(...args);
      }, delay);
    }
  
    return debouncedCall;
  }
  