import classNames from 'classnames'

type ButtonProps = {
	buttonText: string
	buttonClassName?: string
}

export default function Button({buttonText, buttonClassName}: ButtonProps) {
	return (
	<div className={classNames(buttonClassName, 'border rounded-full backdrop-blur px-3 py-1')}>
			<span className='text-[14px] text-black'>
				{buttonText}
			</span>
	</div>
	)
}
