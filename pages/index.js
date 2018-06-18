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
      <li>
        <Link href="/demo">
          <a>2. Line chart demo</a>
        </Link>
      </li>
      <li>
        <Link href="/chart-toggle">
          <a>3. Line chart toggle demo</a>
        </Link>
      </li>
    </ul>
  );
}

export default IndexPage;