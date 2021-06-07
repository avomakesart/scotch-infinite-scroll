import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ChildSquare from './ChildSquare';

const Squares = () => {
  const [squareDefaultStatus, setSquareDefaultStatus] = useState(false);

  const handleMultiSelect = useCallback(() => {
    setSquareDefaultStatus(!squareDefaultStatus);
  }, [squareDefaultStatus]);


  return (
    <div className='flex flex-col'>
      <ChildSquare
        squareDefaultStatus={squareDefaultStatus}
        handleMultiSelect={handleMultiSelect}
      />
      <div className='flex justify-center'>
        <h4>{squareDefaultStatus ? 'Done!!!' : ''}</h4>
      </div>
    </div>
  );
};

export default Squares;
