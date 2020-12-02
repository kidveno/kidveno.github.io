export default interface ArticleModel {
    mainTitle: string;
    subTitle: string;
    /*
        Text or url pointing to html in data
    */
    description: string;
    raw: string;
    poster: string;
    imgPath: string;
    codepenUrl: string;
    id: string;
    tags: string[];
}
