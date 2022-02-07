import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const Collection = (props: Props) => {
  const router = useRouter()
  return <h2>{router.query.collectionId}</h2>;
};

export default Collection;
