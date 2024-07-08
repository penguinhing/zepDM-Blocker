


function loadSetting() {
	let check = localStorage.getItem('block') == 'true';
    let element = document.getElementsByClassName('DirectMessage_direct_message_container__4omwe')[0];
    element.style.display = check ? 'none' : 'block';
    
}

setTimeout(function() {
    loadSetting();
}, 3000);