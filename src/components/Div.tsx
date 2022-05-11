import React, { FC, ReactNode } from "react";

export default function Div({
  name1,
  children,
}: {
  name1: string;
  children: ReactNode;
}) {
  return (
    <div>
      div : {name1}
      <br />
      {children}
    </div>
  );
}
