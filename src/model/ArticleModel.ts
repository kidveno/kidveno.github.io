export default class ArticleModel {
    mainTitle: string
    subTitle: string
    /*
        Text or url pointing to html in data
    */
    description: string
    raw: string
    poster: string
    imgPath: string
    codepenUrl: string
    id: string;
    tags: string[]
    constructor
    (
      mainTitle: string,
      subTitle: string,
      raw: string,
      description: string,
      poster: string,
      imgPath: string,
      codepenUrl: string,
      id: string,
      tags: string[]
    ) {
      this.mainTitle = mainTitle
      this.subTitle = subTitle
      this.poster = poster
      this.imgPath = imgPath
      this.raw = raw
      this.description = description

      this.codepenUrl = codepenUrl

      this.id = id

      this.tags = tags
    }
}
