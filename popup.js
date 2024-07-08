function toggle(block) {
    let element = document.getElementsByClassName("DirectMessage_direct_message_container__4omwe")[0];
	element.style.display = block ? 'none' : 'block';
    localStorage.setItem('block', block);
}


const checkbox = document.getElementById('blocker');
checkbox.checked = localStorage.getItem('block') == 'true'; 

checkbox.addEventListener('change', (event) => {

	localStorage.setItem('block', event.target.checked);
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.scripting.executeScript(
			{
				target: { tabId: tabs[0].id },
				function : toggle,
				args: [ event.target.checked ]
			}
		);
	});
});


