/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Layout({ children }) {
  return (
    <body className="font-mono">
      <div className="flex max-w-2xl mx-auto h-full items-center">
        <div className="px-2 py-6 w-screen mx-4">{children}</div>
      </div>
    </body>
  );
}
