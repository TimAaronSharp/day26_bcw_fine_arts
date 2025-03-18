


export class Artwork{
  constructor(data){
    this.id = data.id
    this.slug = data.slug
    this.height = data.height
    this.width = data.width
    this.originalLink = data.originalLink
    this.imgUrls = data.imgUrls
    this.description = data.description
    this.altDescription = data.altDescription
    this.attribution = data.attribution
    this.color = data.color
    this.admirers = data.admirers
  }
}