import "./App.css";

function App() {

    return (
        <>
            <form action="" className={"new-item-form"}>
<div className={"form-row"}>
    <label htmlFor="item">New label</label>
    <input type="text" id={"item"}/>
</div>
                <button className={"btn"}>Add</button>
            </form>
            <h1 className={"header"}>Todo List</h1>
        </>
    )
}

export default App
