function Alert(props) {
  const { alertShow, alert } = props;
  return (
    <>
      {alertShow && (
        <div className="alert alert-success" role="alert">
          {alert}
        </div>
      )}
    </>
  );
}

export default Alert;
