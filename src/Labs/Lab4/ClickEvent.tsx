const hello = () => {
    alert("Hello world");
};

const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};

export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>
            <button onClick={hello} id="wd-hello-world-click">
                Hello World
            </button>
            <button onClick={() => lifeIs("good")} id="wd-life-is-good-click">
                Life is Good!
            </button>
            <button onClick={() => {
                hello();
                lifeIs("Great!");
            }} id="wd-hello-life-is-great-button">
            </button>
            <hr />
        </div>
    );
}
