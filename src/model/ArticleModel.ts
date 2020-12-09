/**
 * Model representing an article on this site
 */
export default interface ArticleModel {
    /**
     * Main article title
     */
    mainTitle: string;
    /**
     * Secondary title for article
     */
    subTitle: string;
    /*
        Short description of what is in the artcle
    */
    description: string;
    /**
     * Raw Html to show be rendered before the markdown of the article
     */
    raw: string;
    /**
     * Who Wrote the article in case it was the author
     */
    poster: string;
    /**
     * Cover image url for this article
     */
    imgPath: string;
    /**
     * Url to a related codepen for this article
     */
    codepenUrl: string;
    /**
     * Article id must be unique
     */
    id: string;
    /**
     * Tags for this article
     */
    tags: string[];
    /**
     * Markdown to be loaded from file
     */
    markdown: string | null;
}
