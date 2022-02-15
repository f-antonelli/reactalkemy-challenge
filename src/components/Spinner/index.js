const Spinner = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border text-success"
        style={{width: '3rem', height: '3rem'}}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Spinner;
