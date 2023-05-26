import PropTypes from "prop-types";

const ContentLayout = ({ children }) => {
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
