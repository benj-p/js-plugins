import { fetchMovies, getList } from './movies';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';

const form = document.querySelector('#search-movies');

form.addEventListener('submit', getList);

fetchMovies('Harry Potter');
initSortable();
initMarkdown();
initSelect2();
