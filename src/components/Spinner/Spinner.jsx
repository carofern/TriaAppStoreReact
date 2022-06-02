import { Spinner } from "react-bootstrap";

export default function SpinnerLoading() {
    return (
        <Spinner className="spinner" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  