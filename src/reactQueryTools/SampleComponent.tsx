import React from 'react';
import { useSampleListQuery } from './api/useSampleListQuery';

const SampleComponent = () => {
  // it can be also destructured to:
  // { sampleList: { data, isLoading, isError } }
  const { sampleList } = useSampleListQuery();

  // but take a look what kind of data you've get in result
  // console.log(sampleList)

  if (sampleList.isLoading) {
    return <div>loading...</div>;
  }

  if (sampleList.isError) {
    return <div>error</div>;
  }

  return (
    <div>
      <h1>sample list data</h1>
      {sampleList.data?.data.map(
        ({ id, title, body }: { id: number; title: string; body: string }) => (
          <div key={id}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</p>
            <p>{body}</p>
          </div>
        )
      )}
    </div>
  );
};

export { SampleComponent };
