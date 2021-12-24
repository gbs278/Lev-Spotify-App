export class Song {
    constructor(private artist?: string, private name?: string ){

    }
    getArtist(){
        return this.artist;
    }
    getName(){
        return this.name
    }

}