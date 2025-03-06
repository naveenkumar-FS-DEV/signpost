import Loader from "../assets/loader-Img.gif"

const Spinner = () => {
    return (
      <div className="h-screen flex justify-center items-center">
        <img
          src={Loader}
          alt="Loading..."
          className="h-20"
          loading="lazy"
        />
      </div>
    );
  };
  
  export default Spinner;
  