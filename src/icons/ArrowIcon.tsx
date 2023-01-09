type PropTypes = {
  className?: string;
};

export default function ArrowIcon({ className }: PropTypes) {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M19 12H5m0 0 7 7m-7-7 7-7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
