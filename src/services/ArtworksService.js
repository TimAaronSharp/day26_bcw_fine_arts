import { logger } from "@/utils/Logger.js"
import { artworkApi } from "./AxiosService.js"
import { Artwork } from "@/models/Artwork.js"
import { AppState } from "@/AppState.js"


class ArtworksService{
  async getAllArtworks() {
    const res = await artworkApi.get('api/artworks')
    const receivedArtworks = res.data.artworks.map(artwork => new Artwork(artwork))
    AppState.artworks = receivedArtworks
    logger.log(receivedArtworks)
    
  }

}

export const artworksService = new ArtworksService()