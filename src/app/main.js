const GITHUB_USER_REPOS_URL = 'https://api.github.com/users/{username}/repos';

const $form = document.querySelector('[data-locator="repoSearchForm"]');
const $reposList = document.querySelector('[data-locator="reposList"]');

function fetchRepos(username) {
	const url = GITHUB_USER_REPOS_URL.replace(/\{username\}/, username);
	return fetch(url)
		.then(response => response.json())
}

function buildReposListMarkup(repos) {
	return repos.map(repo => {
		return `
			<li>
				<a href="${repo.html_url}" target="_blank">${repo.name}</a>
			</li>
		`;
	});
}

function addToDOM(markup) {
	$reposList.innerHTML = markup.join('');
}

$form.addEventListener('submit', event => {
	event.preventDefault();

const username = event.target.querySelector('input[name="username"]').value;
	fetchRepos(username)
		.then(buildReposListMarkup)
		.then(addToDOM);
}, false); // https://www.quirksmode.org/js/events_order.html#link4
