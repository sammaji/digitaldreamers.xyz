import React, { ReactNode } from "react";
import { MdCheck } from "react-icons/md";

export function TypographyH1({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
}

export function TypographyH2() {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      The People of the Kingdom
    </h2>
  );
}

export function TypographyH3() {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      The Joke Tax
    </h3>
  );
}

export function TypographyH4() {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      People stopped telling jokes
    </h4>
  );
}

export function TypographyList({
  data,
  className,
}: {
  data?: String[];
  className?: string;
}) {
  return (
    <ul className={`my-6 ml-6 list-none [&>li]:mt-2 ${className}`}>
      {/* <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li> */}

      {data?.map((value, index) => (
        <li key={index} className="flex items-center gap-2">
          <MdCheck size={20} color="#03C04A" />
          {value}
        </li>
      ))}
    </ul>
  );
}

export function TypographyBlockquote() {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {`"After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."`}
    </blockquote>
  );
}

export function TypographyLead() {
  return (
    <p className="text-xl text-muted-foreground">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
  );
}

export function TypographyLarge() {
  return (
    <div className="text-lg font-semibold">Are you sure absolutely sure?</div>
  );
}

export function TypographySmall() {
  return (
    <small className="text-sm font-medium leading-none">Email address</small>
  );
}

export function TypographyP({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  );
}
