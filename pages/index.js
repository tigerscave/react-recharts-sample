import React from 'react';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <ul>
      <li>
        <Link href="/charts-sample">
          <a>1. Charts sample</a>
        </Link>
      </li>
    </ul>
  );
}

export default IndexPage;