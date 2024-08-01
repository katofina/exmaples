import React, {
  MutableRefObject,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";

function selectedSort(arr: number[]): string {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
    console.log(arr);
  }
  return arr.join(",");
}

function quickSort(arr: number[]): string {
  if (arr.length <= 1) return arr.join(",");
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  console.log(`left: ${left}, right: ${right}, arr: ${arr}, pivot: ${pivot}`);
  return quickSort(left).concat(String(pivot), quickSort(right));
}

function Sort() {
  const param = useParams();
  const array: MutableRefObject<HTMLInputElement> = useRef();
  const [orderArray, setOrderArray] = useState<string>();

  function inputHandler(e: SyntheticEvent) {
    e.preventDefault();
    if (array.current.value) {
      if (param.id === "selected") {
        const strSort = selectedSort(
          array.current.value.split(",").map((item) => Number(item)),
        );
        setOrderArray(strSort);
      } else {
        const strSort = quickSort(
          array.current.value.split(",").map((item) => Number(item)),
        );
        setOrderArray(strSort);
      }
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
