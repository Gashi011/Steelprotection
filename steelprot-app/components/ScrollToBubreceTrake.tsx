'use client'
import { Link} from 'react-scroll';

const ScrollToBubreceTrake = () => {
  return (
    <div>
      <Link
        to="bubreceTrake" // This should match the ID of the target div
        smooth={true}
        duration={1000} // Adjust the duration as needed (1s in this example)
        className="text-white cursor-pointer hover:text-red-500"
      >
        QUELLMAX bubreće trake
      </Link>
    </div>
  );
};

export default ScrollToBubreceTrake;
