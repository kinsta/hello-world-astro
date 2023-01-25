import rss, {
	pagesGlobToRssItems
} from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export const get = (context) =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.md'),
	});
