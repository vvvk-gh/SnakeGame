f = ()=>{
    alert('Pressed the document ')
}

f2 = (e)=>{
    console.log('pressed key is '+e.key)
}


document.addEventListener('click', f)

document.addEventListener('keydown' ,f2)