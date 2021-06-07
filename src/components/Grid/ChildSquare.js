import React, { useCallback, useMemo, useState } from 'react';

const ChildSquare = (props) => {
  const [squareClick, setSquareClick] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const handleSquareClick = useCallback(
    (no, _event) => {
      // Square click handler
      let clickSquare = squareClick;
      clickSquare[no] = !squareClick[no];
      setSquareClick(clickSquare);

      // Check if all the squares are checked
      let alltrue = Object.keys(clickSquare).every((k) => {
        return clickSquare[k];
      });

      if (alltrue) {
        props.handleMultiSelect();
      }

      // Prop for the square default status
      if (props.squareDefaultStatus) {
        props.handleMultiSelect();
      }
    },
    [props, squareClick]
  );

  const { squareDefaultStatus } = props;

  return (
    <div className='flex flex-col mt-20 mx-auto mb-4'>
      <div className='flex'>
        <div
          className={`border border-black w-14 h-14 ${
            squareClick[1] && 'bg-green-500'
          }
          `}
          checked={squareDefaultStatus && squareClick[1]}
          onClick={(e) => {
            handleSquareClick(1, e.target.checked);
          }}
        />
        <div
          className={`border border-black w-14 h-14 ${
            squareClick[2] && 'bg-green-500'
          }
      `}
          checked={squareDefaultStatus && squareClick[2]}
          onClick={(e) => {
            handleSquareClick(2, e.target.checked);
          }}
        />
      </div>

      <div
        className={`border border-black w-14 h-14 ${
          squareClick[3] && 'bg-green-500'
        }
  `}
        checked={squareDefaultStatus && squareClick[3]}
        onClick={(e) => {
          handleSquareClick(3, e.target.checked);
        }}
      />

      <div className='flex'>
        <div
          className={`border border-black w-14 h-14 ${
            squareClick[4] && 'bg-green-500'
          }
          `}
          checked={squareDefaultStatus && squareClick[4]}
          onClick={(e) => {
            handleSquareClick(4, e.target.checked);
          }}
        />
        <div
          className={`border border-black w-14 h-14 ${
            squareClick[5] && 'bg-green-500'
          }
      `}
          checked={squareDefaultStatus && squareClick[5]}
          onClick={(e) => {
            handleSquareClick(5, e.target.checked);
          }}
        />
      </div>
    </div>
  );
};

export default ChildSquare;
