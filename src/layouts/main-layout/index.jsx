import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";
const MainLayout = ({ children }) => {
  return (
    <main className="max-w-full min-h-screen dark:bg-blue-950 bg-slate-100">
      <Navbar />
      {children}
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayout;
