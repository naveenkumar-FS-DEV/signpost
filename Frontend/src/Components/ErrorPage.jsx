import ErrorImg from "../assets/error-image.gif";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <section className="max-w-md w-full text-center">
        <img
          loading="lazy"
          src={ErrorImg}
          alt="Error"
          className="w-full max-w-xs mx-auto"
        />
      </section>
    </div>
  );
};

export default ErrorPage;
