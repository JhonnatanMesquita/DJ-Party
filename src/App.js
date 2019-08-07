import React, {useState, useEffect} from 'react';
import AddVideo from './AddVideo'
import VideoList from './VideoList'
import axios from 'axios'
import VideoDetail from './VideoDetail'
import Firebase from './FireBase'
import Config from './Config'

const App = () => {

  const [videos, setVideos] = useState([])
  const [idxVideos, setIdxVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState()

  const handleSubmit = (urlYoutube) => {

    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/; //Credits to: http://web.archive.org/web/20160926134334/http://lasnv.net/foro/839/Javascript_parsear_URL_de_YouTube
    let match = urlYoutube.match(regExp);
    let idUrlYoutube = (match&&match[7].length===11)? match[7] : false;

    if(idUrlYoutube){
      axios.get(Config.baseURL, {
        params : {
          part : Config.part,
          key: Config.key,
          id: idUrlYoutube
        },
      }).then(res => {
        setVideos(videos.concat([res.data.items[0]]))      
        if(videos.length > 0){
          setSelectedVideo(videos[0]);
        }
        let newIdxVideos = idxVideos + 1 
        setIdxVideos(newIdxVideos)  //O 'index' tem que ser setado para que não ocorra o bug de se perder no firebase;
        Firebase.database().ref(`/videos/${newIdxVideos}`).set(res.data.items[0]);
      })
    }else {
      alert ('URL inválida ou houve algum problema ao processar essa URL. \nVerifique a URL e tente novamente mais tarde')
    }
    
  };

  const handleVideoSelect = (video) => { //função desativada para evitar alguns bugs :D; Mas ela fuciona se remover os comentarios
    //setSelectedVideo(video);  
  }

  const removeVideo = () =>{
    Firebase.database().ref('/videos').on('value', snapshot => {          
      Object.keys(snapshot.exportVal()).forEach((key) => {
        if(snapshot.exportVal()[key].id === videos[0].id){
          Firebase.database().ref(`/videos/${key}`).remove()
        }
      })
    })
    videos.shift();
    setVideos(videos)
    setSelectedVideo(videos[0]);
  }

  const removeVideoEspc = (video) => {
    let remove = window.confirm(`Deseja realmente remover '${video.snippet.title}' da playlist?`)

    if(remove){
      for( var i = 0; i < videos.length; i++){ 
        let attVideos = videos.filter((videos) => {
          return videos.id !== video.id
        })
        setVideos(attVideos);
      }
      Firebase.database().ref('/videos').on('value', snapshot => {          
        Object.keys(snapshot.exportVal()).forEach((key) => {
          if(snapshot.exportVal()[key].id === video.id){
            Firebase.database().ref(`/videos/${key}`).remove()
          }
        })
      })
    }
  }

  useEffect(() => {
    let ref = Firebase.database().ref('/videos');
    ref.on('value', snapshot => {
      if(snapshot.val() !== null){
        let videoList = Object.values(snapshot.exportVal()).filter( (video) =>{
          return video !== null || video !== 'empty'
        })
        setVideos(videoList);
        setSelectedVideo(videoList[0]);
        document.title = `DJ Party - ${videoList[0].snippet.title}`
      Object.keys(snapshot.exportVal()).forEach((teste) => {
        setIdxVideos(parseInt(teste))
      })
      }
    });
  }, [])

  return (
    <div className='ui container' style={{marginTop: '1em'}}>
        <AddVideo handleFormSubmit={handleSubmit}/>
        <div className='ui grid'>
            <div className="ui row">
                <div className="eleven wide column">                  
                    <VideoDetail video={selectedVideo} removeVideo={removeVideo} />
                </div>
                <div className="five wide column">
                  <VideoList handleVideoSelect={handleVideoSelect} videos={videos} removeVideoEspc={removeVideoEspc}/>
                </div>
            </div>
        </div>
    </div>
  )

}

export default App;