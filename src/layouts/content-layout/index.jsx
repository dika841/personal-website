import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContentLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);
  return (
    <section className="w-full mt-12 md:mt-10 px-8 md:px-40 flex">
      {children}
    </section>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContentLayout;
