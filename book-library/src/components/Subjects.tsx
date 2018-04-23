import * as React from 'react';

export interface Props {
  isFetching: boolean;
  data: object[];
  error: object;
  type: string;
  onFetch?: () => void;
}

function Subjects({ isFetching, data, error, type, onFetch }: Props) {
  return (
    <div className="hello">
      <div className="greeting">
       Subjects {data.length}
      </div>
      <div>
        <button onClick={onFetch}>Fetch Subjects</button>
      </div>
    </div>
  );
}

export default Subjects;