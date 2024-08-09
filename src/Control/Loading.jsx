import PropTypes from "prop-types";
import Loader from "../assets/loader.gif";

function LoaderGif({ width, height }) {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "30px",
      }}
    >
      <img width={width} height={height} src={Loader} alt="Loading" />
    </div>
  );
}
LoaderGif.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
export default LoaderGif;
