import { Dados } from "../components/Dados";
import { useState, useEffect } from "react";
import winner from "../assets/audios/winner.mp3";

export const LanzarDados = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [winnerAudio, setWinnerAudio] = useState(new Audio(winner));

  const generateRandomNumber = (min, max) => {
    setRandomNumber(0);
    setTimeout(() => {
      setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
    });
  };

  useEffect(() => {
    if (randomNumber === 6) {
      winnerAudio.play();
    }
  }, [randomNumber]);

  return (
    <>
      <div className="text-center">
        <h1 className="mt-2 mb-2">Juego de dados</h1>
        <p>(intenta sacar 6)</p>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => generateRandomNumber(1, 6)}
          >
            Lanzar
          </button>
        </div>

        {randomNumber === 6 && (
          <>
            <h1 className="text-success animate__animated animate__zoomIn mt-2">
              Ganaste!
            </h1>
            <h2>😎</h2>
          </>
        )}
      </div>

      <Dados randomNumber={randomNumber} />
    </>
  );
};
