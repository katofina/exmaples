import React, {
  MutableRefObject,
  SyntheticEvent,
  useRef,
  useState,
} from "react";

function selectedSort(arr: number[]): string {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
      console.log(min);
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
    console.log(arr);
  }
  return arr.join(",");
}

function Sort() {
  const array: MutableRefObject<HTMLInputElement> = useRef();
  const [orderArray, setOrderArray] = useState<string>();

  function inputHandler(e: SyntheticEvent) {
    e.preventDefault();
    if (array.current.value) {
      const strSort = selectedSort(
        array.current.value.split(",").map((item) => Number(item)),
      );
      setOrderArray(strSort);
    }
  }

  return (
    <>
      <div className="divForm">
        <form onSubmit={inputHandler} className="form">
          <div>
            <label htmlFor="array">Enter numbers separated by commas:</label>
            <input type="text" name="array" ref={array} />
          </div>
          <button>Sort</button>
          <div>Ordered array: {orderArray}</div>
        </form>
      </div>
    </>
  );
}

export default Sort;
