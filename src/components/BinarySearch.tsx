import React, { MutableRefObject, SyntheticEvent, useState } from "react";
import { useRef } from "react";

function binarySearch(arr: number[], item: number) {
    let low = 0;
    let high = arr.length - 1;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];
        if (guess === item) return mid;
        if (guess < item) low = mid + 1;
        if (guess > item) high = mid - 1;
    };
    return -1;
}

function BinarySearch () {
    const array: MutableRefObject<HTMLInputElement> = useRef();
    const number: MutableRefObject<HTMLInputElement> = useRef();
    const [index, setIndex] = useState<number>();

    function inputHandler(e: SyntheticEvent) {
        e.preventDefault();
        if (array && number) {
            const arr = array.current.value.split(',')
                .map((item) => Number(item));
            const position = binarySearch(arr, Number(number.current.value));
            setIndex(position);
        };
    }

    return (
        <div className="divForm">
            <form onSubmit={inputHandler} className="form">
                <div>
                    <label htmlFor="array">Enter numbers separated by commas in ascending order:</label>
                    <input type="text" name="array" ref={array}/>
                </div>
                <div>
                    <label htmlFor="number">Enter the number for search:</label>
                    <input type="number" name="number" ref={number}/>
                </div>
                <button>Search</button>
                <div>Index of element: {index}</div>
            </form>
        </div>
    )
}

export default BinarySearch;