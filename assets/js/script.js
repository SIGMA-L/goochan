console.log('-- ' + Date().split(' ')[4] + ' --');

const elemSearchBox = $('searchBox');
const searchInput = $('search');
const elemSearchBtn = $('searchBtn');
const rondomWords = [
	'ストロベリーパフェ',
	'チョコパフェ'
]

function searchBoxOnFocus(value){
	if(value){
		// console.log('検索ボックスにフォーカスされたよ！');
		elemSearchBox.classList.add('focusd');
		searchInput.placeholder = 'ぐーちゃんの気まぐれ検索モード';
	}else{
		// console.log('検索ボックスからフォーカスが外れたよ！');
		elemSearchBox.classList.remove('focusd');
		searchInput.placeholder = 'ぐーちゃんと海へ行こう';
	}
}

$('search').addEventListener('keydown', (e) => {
	const isComposing = e.isComposing || e.key === 'Process';
	if(e.key === 'Enter' && !isComposing){
		let searchContent = searchInput.value;
		if(!searchContent){
			let rondomIndex = Math.floor(Math.random() * rondomWords.length);
			console.log(rondomIndex);
			searchContent = rondomWords[rondomIndex];
		};
		console.log(searchContent + ' で検索するよ！');
		if(e.shiftKey || e.ctrlKey) window.open('https://www.google.com/search?q=' + searchContent, '_blank');
		else window.location.href = 'https://www.google.com/search?q=' + searchContent;
	}
})

function $(elemId){
	return document.getElementById(elemId);
}