import { useState } from "react";
import { Button } from "react-bootstrap";
export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <Button onClick={() => setCount(count + 1)}
                id="wd-counter-up-click" className="bg-success border-0 me-2">Up</Button>
            <Button onClick={() => setCount(count - 1)}
                id="wd-counter-down-click" className="bg-danger border-0">Down</Button>
            <hr /></div>);
}