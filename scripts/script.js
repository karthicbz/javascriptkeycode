window.addEventListener('keydown', (e)=>{
    const keycode = document.querySelector(".keycode");
    const keyName = document.querySelector(".keyboardMock")
    console.log(e);
    keycode.setAttribute('style', 'font-size:104px;');
    keycode.textContent = e.keyCode;
    keyName.classList.add("keyboardAdded");
    // keyName.textContent = ()=>{
    //     e.code.replace('Key', 'Key ');
    // }
    const text = ()=>{
        if(e.code.includes('Key')){
            return e.code.replace('Key', 'Key ');
        }else if(e.code.includes('Digit')){
            return e.code.replace('Digit', 'Digit ');
        }else if(e.code.includes('Numpad')){
            return e.code.replace('Numpad', 'Numpad ');
        }else{
            return e.code;
        }
    }

    keyName.textContent = text();
})