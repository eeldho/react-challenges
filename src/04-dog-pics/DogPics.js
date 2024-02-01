import { useEffect, useState } from "react";

const getDogImage = async () => {
  const result = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await result.json();
  return dog.message;
};

export default function DogPics() {
  const [dogPic, setDogPic] = useState("");

  useEffect(() => {
    getDogImage().then((dog) => {
      setDogPic(dog);
    });
  }, []);

  return (
    <div className="dog-pics">
      <img src={dogPic} alt={dogPic} />
      <button onClick={async (e) => setDogPic(await getDogImage())}>🐶</button>
    </div>
  );
}
