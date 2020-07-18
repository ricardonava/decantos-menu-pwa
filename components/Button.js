/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Button({ variant }) {
  return (
    <div>
      <a
        type="button"
        className="text-center block border border-gray-900 rounded bg-gray-900 hover:border-gray-700 hover:bg-gray-700 text-white py-2 px-4"
      >
        VINOS
      </a>
    </div>
  );
}
