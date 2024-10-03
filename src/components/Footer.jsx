import React from "react";
export default function Footer() {
  return (
    <>
      <footer className="bg-white  shadow mt-4 bottom-0 fixed block w-screen">
        <p className="text-sm text-gray-500 text-center ">
          © {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
