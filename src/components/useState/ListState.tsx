import { useEffect, useState } from "react";

const names = [
  {
    name: "hello",
  },
  {
    name: "jin",
  },
  {
    name: "bye",
  },
];

const ListState = () => {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState<any>([]);
  useEffect(() => {
    setResult(names);
  }, []);
  return (
    <>
      <p>["hello", "jin", "bye"]</p>

      {show ? (
        result.map((person: any) => <p key={person.name}>{person.name}</p>)
      ) : (
        <p>1</p>
      )}
      <button
        type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        보이기
      </button>
    </>
  );
};

export default ListState;
