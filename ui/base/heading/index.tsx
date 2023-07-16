import classNames from 'classnames'

type HeadingProps = {
  heading: string;
}

export default function Heading({ heading }: HeadingProps) {
  return (
    <div className='text-center'>
      <h2 className={classNames('border-b border-base-black pb-2 px-4 inline-block', 'lg:px-6')}>{heading}</h2>
    </div>
  );
}
