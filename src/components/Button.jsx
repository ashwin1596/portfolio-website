import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Button = ({ containerClass }) => {
    const btnRef = useRef();

    useGSAP(() => {
        gsap
            .timeline({
                repeat: -1,
            })
            .to(btnRef.current, {
                rotationY: 360,
                duration: 2.5,
            });
    }, []);

    return (
        <button ref={btnRef} className={`bg-red-800 text-white rounded-full ${containerClass}`}>
            {
                <img
                    src="/assets/arrow-down.svg"
                    alt="down arrow"
                    className="w-full h-full -rotate-90"
                />
            }
        </button>
    );
};

export default Button;
