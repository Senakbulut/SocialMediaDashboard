import React, {Component} from 'react';
import PostData from '../data/data.json'
import './Main.css'
import {  Card } from 'react-bootstrap';

class Main extends React.Component {
   state = {
      src:   PostData.map((postDetail)=>{
        return postDetail.posts_by_date['2021-06-17']
        .map((firstPost, index)=>{
         console.log(index)

         if(index == 0 ){
          return firstPost.entry.image
         }
      })
     
    
  }),
      fallbackSrc: "images/no-post-image.png",
      loaded : false,
      error: false
   }
   onImageLoaded =()=>{
     this.setState({loaded:true});
   }
   onImageError =()=>{
      this.setState({error:true});
   }
render(){
const {src, loaded, fallbackSrc, error} = this.state
let imgSrc = (!error) ? src : fallbackSrc

  return (
   
       <div className="containerMain">
          
         <div className="wrapper">
           <div className="profile">
             <img src="images/profile.png" alt="" />
           </div>
         <div className="information">
             <span className="dot1"> </span><span className="inftext"> Published</span>
             <span className="dot2"> </span><span className="inftext"> Scheduled</span>
             <span className="dot3"> </span><span className="inftext"> Need Approval</span>
             <span className="dot4"> </span><span className="inftext"> Error</span>
             <span className="dot5"> </span><span className="inftext"> Notes</span>
           </div> 
          
           <div className="dateheader">
              {PostData.map((postDetail)=>{
                  return <h3>{postDetail.posts_by_date['2021-06-17']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         return <h3>{firstPost.published_at.split(" ")[0]}</h3>
                       }
                    
                    })
                  }</h3>
                })}
           </div>
         
           <Card>
            
           
            {PostData.map((postDetail)=>{
                  return postDetail.posts_by_date['2021-06-17']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         
                         if(firstPost.status == 3){
                          return <div className="status2"> <img className="icon1" src="images/facebook.png" alt="" /> </div>
                         }
                         else{
                          return <div className="statuswhite"> </div>
                         }
                       }
                    })
                  
                })}
        
     
    <Card.Body>
    <div className="topsegment">
               <div className="date">
                {PostData.map((postDetail)=>{
                  return <p>{postDetail.posts_by_date['2021-06-17']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         return <p>{firstPost.published_at}</p>
                       }
                    })
                  }</p>
                })}
               </div>
              
               <div className="icons">
                 <img src="images/forbidden-sign.png" alt="" />
                 <img src="images/delete.png" alt="" />
                 <img src="images/more.png" alt="" />
               </div>
        </div>
        <br/>
        <Card.Text>
      {PostData.map((postDetail)=>{
                  return <p>{postDetail.posts_by_date['2021-06-17']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         return <p>{firstPost.entry.message}</p>
                       }
                    
                    })
                  }</p>
                })}
      </Card.Text>
      <br/>
      <Card.Img  src={imgSrc} onLoad={this.onImageLoaded} onError={this.onImageError} alt="" />
    
              
          
        <div className="social">
                 <img src="images/like.png" alt="" /><label>0</label>
                 <img src="images/chat.png" alt="" /><label>0</label>
                 <img src="images/share.png" alt="" /><label>0</label>
                 <img src="images/look.png" alt="" /><label>0</label>
               </div>
    </Card.Body>
  
  </Card>
  <Card>
            
  {PostData.map((postDetail)=>{
                  return postDetail.posts_by_date['2021-06-17']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         
                         if(firstPost.status == 3){
                          return <div className="status2"><img className="icon2" src="images/twitter.png" alt="" /></div>
                         }
                         else{
                          return <div className="statuswhite"> </div>
                         }
                       }
                    })
                  
                })}
     
    <Card.Body>
    <div className="topsegment">
               <div className="date">
                {PostData.map((postDetail)=>{
                  return <p>{postDetail.posts_by_date['2021-06-17']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         return <p>{firstPost.published_at}</p>
                       }
                    })
                  }</p>
                })}
               </div>
              
               <div className="icons">
                 <img src="images/forbidden-sign.png" alt="" />
                 <img src="images/delete.png" alt="" />
                 <img src="images/more.png" alt="" />
               </div>
        </div>
        <br/>
        <Card.Text>
      {PostData.map((postDetail)=>{
                  return <p>{postDetail.posts_by_date['2021-06-17']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         return <p>{firstPost.entry.message}</p>
                       }
                    
                    })
                  }</p>
                })}
      </Card.Text>
      <br/>
      <Card.Img  src={imgSrc} onLoad={this.onImageLoaded} onError={this.onImageError} alt="" />
      
        <div className="social">
                 <img src="images/heart.png" alt="" /><label>0</label>
                 <img src="images/retweet.png" alt="" /><label>0</label>
                 <img src="images/share.png" alt="" /><label>0</label>
                 <img src="images/look.png" alt="" /><label>0</label>
               </div>
    </Card.Body>
  
  </Card>
  <div className="dateheader2">
              {PostData.map((postDetail)=>{
                  return <h3>{postDetail.posts_by_date['2021-07-01']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         return <h3>{firstPost.published_at.split(" ")[0]}</h3>
                       }
                    
                    })
                  }</h3>
                })}
           </div> 
  <Card>
            
  {PostData.map((postDetail)=>{
                  return postDetail.posts_by_date['2021-07-01']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         
                         if(firstPost.status == 1){
                          return <div className="status"><img className="icon1" src="images/facebook.png" alt="" /></div>
                         }
                         else{
                          return <div className="statuswhite"> </div>
                         }
                       }
                    })
                  
                })}
     
    <Card.Body>
    <div className="topsegment">
               <div className="date">
                {PostData.map((postDetail)=>{
                  return <p>{postDetail.posts_by_date['2021-07-01']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         return <p>{firstPost.published_at}</p>
                       }
                    })
                  }</p>
                })}
               </div>
              
               <div className="icons">
             
                 <img src="images/delete.png" alt="" />
                 <img src="images/more.png" alt="" />
               </div>
        </div>
        <br/>
        <Card.Text>
      {PostData.map((postDetail)=>{
                  return <p>{postDetail.posts_by_date['2021-07-01']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         return <p>{firstPost.entry.message}</p>
                       }
                    
                    })
                  }</p>
                })}
      </Card.Text>
      <br/>
               {PostData.map((postDetail)=>{
                  return <Card.Img src={postDetail.posts_by_date['2021-07-01']
                  .map((firstPost, index)=>{
                   console.log(index)

                   if(index == 0 ){
                    return firstPost.entry.image
                   }
                })
              }  />
              
            })}
          
        <div className="social">
                 <img src="images/like.png" alt="" /><label>0</label>
                 <img src="images/chat.png" alt="" /><label>0</label>
                 <img src="images/share.png" alt="" /><label>0</label>
                 <img src="images/look.png" alt="" /><label>0</label>
               </div>
    </Card.Body>
  
  </Card>
   
           <Card>
            
           {PostData.map((postDetail)=>{
                  return postDetail.posts_by_date['2021-07-01']
                    .map((firstPost, index)=>{
                       if(index == 1 ){
                         
                         if(firstPost.status == 0){
                          return <div className="status3"><img className="icon2" src="images/twitter.png" alt="" /></div>
                         }
                         else{
                          return <div className="statuswhite"> </div>
                         }
                       }
                    })
                  
                })}
     
    <Card.Body>
    <div className="topsegment">
               <div className="date">
                {PostData.map((postDetail)=>{
                  return <p>{postDetail.posts_by_date['2021-07-01']
                    .map((firstPost, index)=>{
                       if(index == 1 ){
                         return <p>{firstPost.published_at}</p>
                       }
                    })
                  }</p>
                })}
               </div>
              
               <div className="icons">
                 <img src="images/delete.png" alt="" />
                 <img src="images/more.png" alt="" />
               </div>
        </div>
        <br/>
        <Card.Text>
      {PostData.map((postDetail)=>{
                  return <p>{postDetail.posts_by_date['2021-07-01']
                    .map((firstPost, index)=>{
                       if(index == 1 ){
                         return <p>{firstPost.entry.message}</p>
                       }
                    
                    })
                  }</p>
                })}
      </Card.Text>
      <br/>
               {PostData.map((postDetail)=>{
                  return <Card.Img src={postDetail.posts_by_date['2021-07-01']
                  .map((firstPost, index)=>{
                   console.log(index)

                   if(index == 0 ){
                    return firstPost.entry.image
                   }
                })
              }  />
              
            })}
          
        <div className="social">
                 <img src="images/heart.png" alt="" /><label>0</label>
                 <img src="images/retweet.png" alt="" /><label>0</label>
                 <img src="images/share.png" alt="" /><label>0</label>
                 <img src="images/look.png" alt="" /><label>0</label>
               </div>
    </Card.Body>
  
  </Card>
  <Card>
            
  {PostData.map((postDetail)=>{
                  return postDetail.posts_by_date['2021-07-01']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         
                         if(firstPost.status == 1){
                          return <div className="status"><img className="icon3" src="images/instagram.png" alt="" /></div>
                         }
                         else{
                          return <div className="statuswhite"> </div>
                         }
                       }
                    })
                  
                })}
     
    <Card.Body>
    <div className="topsegment">
               <div className="date">
                {PostData.map((postDetail)=>{
                  return <p>{postDetail.posts_by_date['2021-07-01']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         return <p>{firstPost.published_at}</p>
                       }
                    })
                  }</p>
                })}
               </div>
              
               <div className="icons">
                 <img src="images/delete.png" alt="" />
                 <img src="images/more.png" alt="" />
               </div>
        </div>
        <br/>
        <Card.Text>
      {PostData.map((postDetail)=>{
                  return <p>{postDetail.posts_by_date['2021-07-01']
                    .map((firstPost, index)=>{
                       if(index == 0 ){
                         return <p>{firstPost.entry.message}</p>
                       }
                    
                    })
                  }</p>
                })}
      </Card.Text>
      <br/>
               {PostData.map((postDetail)=>{
                  return <Card.Img src={postDetail.posts_by_date['2021-07-01']
                  .map((firstPost, index)=>{
                   console.log(index)

                   if(index == 0 ){
                    return firstPost.entry.image
                   }
                })
              }  />
              
            })}
          
        <div className="social">
                 <img src="images/like.png" alt="" /><label>0</label>
                 <img src="images/chat.png" alt="" /><label>0</label>
                 <img src="images/share.png" alt="" /><label>0</label>
                 <img src="images/look.png" alt="" /><label>0</label>
               </div>
    </Card.Body>
  
  </Card>
  
              </div>
       </div>
    
  )
}
}
export default Main