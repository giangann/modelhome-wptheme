import { SVGProps } from 'react';

export function IcBaselineFormatQuote(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
    </svg>
  );
}

export function CodiconTriangleDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 5.56L2.413 5h11.194l.393.54L8.373 11h-.827L2 5.56z"
      ></path>
    </svg>
  );
}

export function CodiconTriangleUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="m14 10.44l-.413.56H2.393L2 10.46L7.627 5h.827L14 10.44z"
      ></path>
    </svg>
  );
}
