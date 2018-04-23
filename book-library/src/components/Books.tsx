import * as React from 'react';

export interface Props {
  isFetching: boolean;
  data: object[];
  error: object;
  type: string;
  onFetch?: () => void;
}

function Books({ isFetching, data, error, type, onFetch }: Props) {
  return (
    <div className="hello">
      <div>
        Books {data.length}
      </div>
      <div>
        <button onClick={onFetch}>Fetch Books</button>
      </div>
    </div>
  );
}

export default Books;