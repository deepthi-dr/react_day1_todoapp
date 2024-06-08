
function ToDoApp({name,weather})
{
    return(
        <div>
            <h1>Welcome to {name}'s To-Do List</h1>
            <h2>The weather in {weather.currentCity} is {weather.description} with a temperature of {weather.temperature} degrees fahrenheit.</h2>
        </div>
    );
}

export default ToDoApp;
