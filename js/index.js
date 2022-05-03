function getUrl(subURL) { return '//cdn.jsdelivr.net/gh/lc6464/lc6464.github.io@master/' + subURL; }
function getComUrl(subURL) { return getUrl(`components/${subURL}.html`); }
if (typeof jQuery === 'undefined') {
	var $ = document.querySelector.bind(document), $$ = document.querySelectorAll.bind(document);
	function getCom(q, sURL) { if ($$(q)) { var x = new XMLHttpRequest; x.open('get', getComUrl(sURL)); x.onload = function () { var s = this; $$(q).forEach(e => e.innerHTML = s.responseText); }; x.send(); } }
	$$('abbr').forEach(ele => ele.addEventListener('click', _ => alert(ele.innerText + '\r\n' + ele.title)));
	$$('svg').forEach(ele => { ele.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); ele.setAttribute('version', '1.1'); });
	$$('svg.ic-icon').forEach(ele => ele.setAttribute('viewBox', '0 0 256 256'));
} else {
	function getCom(query, subURL) { if ($(query).length) { $.ajax(getComUrl(subURL)).done(function (r) { $(query).html(r); }); } }
	$('abbr').click(function () { alert(this.innerText + '\r\n' + this.title) });
	$('svg').attr('xmlns', 'http://www.w3.org/2000/svg').attr('version', '1.1');
	$('svg.ic-icon').attr('viewBox', '0 0 256 256');
}
getCom('.cr', 'copyright');
getCom('.license', 'license');
getCom('svg.ic-icon', 'lc.svg');