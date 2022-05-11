function fillBody () {
    fillCounterParr()
}
function fillCounterParr () {
    const counterSpan = document.getElementById('counter').textContent = `Pressed ${++counter} times`;
    let counter = 0;
}
