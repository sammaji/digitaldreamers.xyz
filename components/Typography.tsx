import React, { HTMLAttributes, ReactNode } from "react";
import { MdCheck } from "react-icons/md";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {}
export interface TypographyListProps extends TypographyProps {
  data: string[];
}

export function TypographyH1({
  children,
  className,
  ...rest
}: TypographyProps) {
  return (
    <h2
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function TypographyH2({
  children,
  className,
  ...rest
}: TypographyProps) {
  return (
    <h3
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ${className}`}
      {...rest}
    >
      {children}
    </h3>
  );
}

export function TypographyH3({
  children,
  className,
  ...rest
}: TypographyProps) {
  return (
    <h4
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
      {...rest}
    >
      {children}
    </h4>
  );
}

export function TypographyH4({
  children,
  className,
  ...rest
}: TypographyProps) {
  return (
    <h5
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
      {...rest}
    >
      {children}
    </h5>
  );
}

export function TypographyList({
  data,
  className,
  ...rest
}: TypographyListProps) {
  return (
    <ul className={`my-6 ml-6 list-none [&>li]:mt-2 ${className}`} {...rest}>
      {data?.map((value, index) => (
        <li key={index} className="flex items-center gap-2">
          <MdCheck size={20} color="#03C04A" />
          {value}
        </li>
      ))}
    </ul>
  );
}

export function TypographyBlockquote({
  children,
  className,
  ...rest
}: TypographyProps) {
  return (
    <blockquote
      className={`mt-6 border-l-2 pl-6 italic ${className}`}
      {...rest}
    >
      {children}
    </blockquote>
  );
}

export function TypographyLead({
  className,
  children,
  ...rest
}: TypographyProps) {
  return (
    <p className={`text-xl text-muted-foreground ${className}`} {...rest}>
      {children}
    </p>
  );
}

export function TypographyLarge({
  children,
  className,
  ...rest
}: TypographyProps) {
  return (
    <div className={`text-lg font-semibold ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function TypographySmall({
  children,
  className,
  ...rest
}: TypographyProps) {
  return (
    <small
      className={`text-sm font-medium leading-none ${className}`}
      {...rest}
    >
      {children}
    </small>
  );
}

export function TypographyP({ children, className, ...rest }: TypographyProps) {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}
