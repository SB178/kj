import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import "./test.css";
const App = () => {
  const [s, sets] = useState(false);
  const transition = useTransition(s, {
    from: { x: 100, y: 100, opacity: 1 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 100, opacity: 1 }
    
  });

  return (
    <div>
      <button
        onClick={() => {
          sets((v) => !v);
        }}
      >
        {s ? "mount" : "unmount"}
      </button>
      <div>
        {/* {s ? '' : <div className='item'>hello</div>} */}
        {transition((style, item) =>
          item ? (
            ""
          ) : (
            <animated.div style={style} className="item">
              hello
            </animated.div>
          )
        )}
      </div>
    </div>
  );
};

export default App;
