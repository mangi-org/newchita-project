import { Helmet } from 'react-helmet-async';
import HeadInterface from './HeadInterface';

function Head(props: HeadInterface) {
    const title = props.title ? props.title : '';
    const description = props.description ? props.description : '';

    return (
        <Helmet defer={false}>
            <title>{title}</title>
            <meta name='title' content={title} />
            <meta name='description' content={description} />
            <meta property='og:title' content={props.title} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={props.url} />
            <meta property='og:description' content={props.description} />
            <meta property='og:site_name' content={props.siteName} />
            <meta property='og:locale' content={props.locale} />
            <meta property='og:locale:alternate' content={props.localeAlternate} />
            {props.children}
        </Helmet>
    );
}

export default Head