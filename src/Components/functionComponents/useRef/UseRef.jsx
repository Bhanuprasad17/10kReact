import React, { useEffect, useRef } from "react";

const UseRef = () => {
  // controlled components -> state -> form -> event -> e.target.value -> state
  // unControlled components -> useRef -> ref attribute -> here you target or access the dom element directly
  // document.getElementsByTagName('p')[0].innerText = 'my wish value'

  // ref -> refernce -> it takes an object with default property called current
  // ref = { current : null}

  let headingRef = { current: null };
  console.log("before", headingRef);

  const handleClick = () => {
    console.log(headingRef);
    console.log("after", headingRef.current.textContent);
    headingRef.current.textContent = "ref";
  };
  let inputRef = { current: "" };

  const handleSubmit = () => {
    // console.log(inputRef.current.value)
    inputRef.current.focus();
  };

  const vidoeRef = { current: null };

  const handlePlay = () => {
    vidoeRef.current.play();
  };

  const handlePause = () => {
    vidoeRef.current.pause();
  };

  // useEffect(()=>{
  //    vidoeRef.current.play()
  // },[])


  console.log('ref', useRef())

  return (
    <div>
      <h1 ref={headingRef}>hello! world</h1>
      <button onClick={handleClick}>click</button>
      <br />
      {/* <label htmlFor="name">Name :</label> */}
      <input type="text" id="name" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <video
          ref={vidoeRef}
          style={{ width: "300px", height: "150px" }}
          controls={false}
        >
          <source src="https://cdn.pixabay.com/video/2024/06/09/215937_tiny.mp4" />
        </video>
        <div>
          <button onClick={handlePlay}>play</button>
          <button onClick={handlePause}>Pause</button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
