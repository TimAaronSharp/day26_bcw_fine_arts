import { logger } from "@/utils/Logger.js"
import { artworkApi } from "./AxiosService.js"
import { Artwork } from "@/models/Artwork.js"
import { AppState } from "@/AppState.js"
// import App from "@/App.vue"


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
  async admirerCheck(artId) {
    logger.log(AppState.identity)
    logger.log(AppState.account)
    // logger.log(artId);
    debugger
    let foundAdmirer = false
    // @ts-ignore
    const identity = AppState.identity.id
    const admireCheck = await artworkApi.get(`api/artworks/${artId}`)
    admireCheck?.data?.admirers.forEach(admirer =>{
      const admirerId = admirer.id
      if (admirerId==identity) {
        logger.log(`admireArray contains id: ${identity}`)
        logger.log(admireCheck.data.admirers)
        return
      }      
      if (admirerId!== identity && foundAdmirer == false) {
        logger.log(`admireArray DOES NOT contain id: ${identity}`)
        logger.log(admireCheck.data.admirers)
        foundAdmirer = true
        this.admireArtwork(artId)
      }
    })
  }

  async admireArtwork(artId){
    // debugger
    const admiringUser = {}
    // @ts-ignore
    admiringUser.id = AppState.identity.id
    // @ts-ignore
    admiringUser.name = AppState.identity.nickname
    admiringUser.picture = AppState.identity.picture

    const res = await artworkApi.post(`api/artworks/${artId}/admire`, admiringUser)
    logger.log(res)
    this.handleResponse(res)
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

