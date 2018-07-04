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
      <li>
        <Link href="/intl-practice">
          <a>4. React Intl Practice</a>
        </Link>
      </li>
      <li>
        <Link href="/intl-practice-v2">
          <a>5. React Intl Practice V2</a>
        </Link>
      </li>
      <li>
        <Link href="/intl-practice-v3">
          <a>6. React Intl Practice V3</a>
        </Link>
      </li>
      <li>
        <Link href="/intract-pie-chart">
          <a>7. Recharts intract pie chart practice</a>
        </Link>
      </li>
      <style jsx>{`
        ul {
          font-size: 1.5rem;
        }
      `}</style>
    </ul>
  );
}

export default IndexPage;