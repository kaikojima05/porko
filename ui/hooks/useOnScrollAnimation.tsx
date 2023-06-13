import { useEffect, useRef, MutableRefObject } from "react";

type useOnScrollAnimationProps = {
	removeAnimation?: boolean;
};

export const useOnScrollAnimation = ({
	removeAnimation = false,
}: useOnScrollAnimationProps = {}): MutableRefObject<HTMLDivElement | null> => {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					ref.current?.classList.add("on-scroll");
				} else if (
					!entry.isIntersecting &&
					removeAnimation
				) {
					ref.current?.classList.remove(
						"on-scroll"
					);
				}
			},
			{
				threshold: 0.1,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return ref;
};
