const Clock =({Time})=>{
    let hours = Time.getHours().toString().padStart(2, '0');
    let minutes = Time.getMinutes().toString().padStart(2, '0');
    let seconds = Time.getSeconds().toString().padStart(2, '0');
    // return `${hours}:${minutes}:${seconds}`;

    return(<>
        <div> 
            <h2>Digital Clock</h2>
            <p>{hours}:{minutes}:{seconds}</p>

        </div>
    </>);
}
export default Clock;