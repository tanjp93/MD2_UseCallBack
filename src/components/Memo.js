import React from 'react';

const Memo = ({onIncrease}) => {
    console.log("hello anh em");
    return (
        <div>
            <h1>Hello anh em</h1>
            <button onClick={onIncrease}>Increase</button>
        </div>
    );
}

export default React.memo(Memo);
// export default Memo;
