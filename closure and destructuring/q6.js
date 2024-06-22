x=[]
function createPlaylist(playlistname){
    let playlist =[]
    return {
        addSong : function(song,artist){
            playlist.push({song,artist})
        },
        listSongs : function(){
            if (playlist.length === 0){
                console.log("Playlist is Empty")
            }else{
                console.log(`${playlistname} playlist : ${playlist.map(item => `${item.song} by ${item.artist}`).join(',')}`)
            }
        }
    }
}
function addSong(fn,s,n){
    fn.addSong(s,n)
}

function listSongs(fn){
    fn.listSongs()
}
smtg = createPlaylist("My Favourite")
addSong(smtg, "song1", "artist1")
addSong(smtg, "song2", "artist2")
listSongs(smtg)