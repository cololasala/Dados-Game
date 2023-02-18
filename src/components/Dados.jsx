import "./styles/Dados.css";

export const Dados = ({ randomNumber }) => {
  return (
    <>
      <div className="container-flex d-flex justify-content-center align-items-center">
        {/* Dado 1 */}
        {randomNumber === 1 && (
          <div className="dado d-flex justify-content-center align-items-center animate__animated animate__rollIn">
            <div className="punto"></div>
          </div>
        )}

        {/* Dado 2 */}
        {randomNumber === 2 && (
          <div className="dado animate__animated animate__rollIn">
            <div className="d-flex justify-content-start">
              <div className="punto"></div>
            </div>
            <div
              className="d-flex justify-content-end"
              style={{ "marginTop": "40%" }}
            >
              <div className="punto"></div>
            </div>
          </div>
        )}

        {/* Dado 3 */}
        {randomNumber === 3 && (
          <div className="dado animate__animated animate__rollIn">
            <div className="d-flex justify-content-start">
              <div className="punto"></div>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ "marginTop": "5%" }}
            >
              <div className="punto"></div>
            </div>
            <div
              className="d-flex justify-content-end"
              style={{ "marginTop": "5%" }}
            >
              <div className="punto"></div>
            </div>
          </div>
        )}

        {/* Dado 4 */}
        {randomNumber === 4 && (
          <div className="dado animate__animated animate__rollIn">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <div className="punto"></div>
                <div className="punto"></div>
              </div>

              <div
                className="d-flex justify-content-between"
                style={{ "marginTop": "40%" }}
              >
                <div className="punto"></div>
                <div className="punto"></div>
              </div>
            </div>
          </div>
        )}

        {/* Dado 5 */}
        {randomNumber === 5 && (
          <div className="dado animate__animated animate__rollIn">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <div className="punto"></div>
                <div className="punto"></div>
              </div>

              <div
                className="d-flex justify-content-center"
                style={{ "marginTop": "5%" }}
              >
                <div className="punto"></div>
              </div>

              <div
                className="d-flex justify-content-between"
                style={{ "marginTop": "5%" }}
              >
                <div className="punto"></div>
                <div className="punto"></div>
              </div>
            </div>
          </div>
        )}

        {/* Dado 6 */}
        {randomNumber === 6 && (
          <div className="dado animate__animated animate__rollIn">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <div className="punto"></div>
                <div className="punto"></div>
              </div>

              <div
                className="d-flex justify-content-between"
                style={{ "marginTop": "5%" }}
              >
                <div className="punto"></div>
                <div className="punto"></div>
              </div>

              <div
                className="d-flex justify-content-between"
                style={{ "marginTop": "5%" }}
              >
                <div className="punto"></div>
                <div className="punto"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
