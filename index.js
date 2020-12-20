window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.input').forEach((item) => {
        item.addEventListener('focus', (ev) => {
            ev.target.placeholder = ''
            ev.target.parentNode.querySelector('.input-label').classList.add('input-label--visible')
        })
    
        item.addEventListener('blur', (ev) => {
            ev.target.parentNode.querySelector('.input-label').classList.remove('input-label--visible')
            ev.target.placeholder = ev.target.parentNode.querySelector('.input-label').textContent
        })
    })
    
    document.querySelector('input[type=checkbox]').addEventListener('change', (ev) => 
        pvAccess.WritePV("IN", ev.target.checked === true ? "1" : "0")
    )
})
