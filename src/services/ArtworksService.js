import { logger } from "@/utils/Logger.js"
import { artworkApi } from "./AxiosService.js"
import { Artwork } from "@/models/Artwork.js"
import { AppState } from "@/AppState.js"


class ArtworksService{
  async getAllArtworks() {
    const res = await artworkApi.get('api/artworks')
    this.handleResponse(res)
  }
  async changePage(pageNumber) {
    const res = await artworkApi.get(`api/artworks?page=${pageNumber}`)
    this.handleResponse(res)
    // AppState.currentPage = pageNumber
    // logger.log(AppState.currentPage)
    // logger.log(res.data)
  }
  async handleResponse(res){
    const receivedArtworks = res.data.artworks.map(artwork => new Artwork(artwork))
    AppState.artworks = receivedArtworks
    AppState.currentPage = res.data.page
    AppState.totalPages = res.data.pages
    // logger.log(res.data)
    logger.log(receivedArtworks)
    // logger.log(AppState.currentPage)
    // logger.log(AppState.totalPages)
    
  }
}

export const artworksService = new ArtworksService()