'use client'
import { Link} from 'react-scroll';

const ScrollToCemlex = () => {
  return (
    <div>
      <Link
        to="cemflex" // This should match the ID of the target div
        smooth={true}
        duration={1000} // Adjust the duration as needed (1s in this example)
        className="text-white cursor-pointer hover:text-red-500"
      >
        CEMflex VB - Limovi za spojeve
      </Link>
    </div>
  );
};

export default ScrollToCemlex;
