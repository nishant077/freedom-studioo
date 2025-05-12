import {useEffect,useState} from 'react'

const Dimension = () => {
    const [dimension, setDimension]=useState({width: 0, height: 0})
    const updateDimension =()=>{
        const {innerWidth,innerHeight}= window;
        setDimension({width: innerWidth, height: innerHeight});

    }

    useEffect(()=>{
        updateDimension();

        window.addEventListener("resize",updateDimension);
   
  return ()=>{window.removeEventListener("resize",updateDimension)};
},[])
   return dimension
}

export default Dimension