import React from 'react';
import { useState, useEffect } from 'react';
import PostData from '../data/data.json'
import './Main.css'
import { Button, Card } from 'react-bootstrap';


export default function Main() {

  return (
   
       <div className="containerMain">
          
         <div className="wrapper">
         <div className="information">
             <span className="dot1"> Published</span>
             <span className="dot2"> Scheduled</span>
             <span className="dot3"> Need Approval</span>
             <span className="dot4"> Error</span>
             <span className="dot5"> Notes</span>
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
            
            <div className="status"></div>
     
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
               {PostData.map((postDetail)=>{
                  return <Card.Img src={postDetail.posts_by_date['2021-06-17']
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
            
            <div className="status2"></div>
     
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
               {PostData.map((postDetail)=>{
                  return <Card.Img src={postDetail.posts_by_date['2021-06-17']
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
            
            <div className="status3"></div>
     
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
                 <img src="images/forbidden-sign.png" alt="" />
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
            
            <div className="status3"></div>
     
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
                 <img src="images/forbidden-sign.png" alt="" />
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
                 <img src="images/like.png" alt="" /><label>0</label>
                 <img src="images/chat.png" alt="" /><label>0</label>
                 <img src="images/share.png" alt="" /><label>0</label>
                 <img src="images/look.png" alt="" /><label>0</label>
               </div>
    </Card.Body>
  
  </Card>
  <Card>
            
            <div className="status3"></div>
     
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
                 <img src="images/forbidden-sign.png" alt="" />
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
      //     <div className="card">
      //       
      //       <div className="info">
      //        
            
      //         <div className="text">
      //        
      //         </div>
      //         <div className="image">
      //         
      //         </div>
      //         
      //       </div>
      //     </div>
      //     <div className="card">
      //       <div className="status">
      //         <img src="images/Card2.png" alt="" />
      //       </div>
      //       <div className="info">
      //         <div className="topsegment">
      //         <div className="date">
      //          {PostData.map((postDetail)=>{
      //            return <p>{postDetail.posts_by_date['2021-06-17']
      //              .map((firstPost, index)=>{
      //                 if(index == 1 ){
      //                   return <p>{firstPost.published_at}</p>
      //                 }
                      
      //              })
      //            }</p>
      //          })}
      //         </div>
      //         <div className="icons">
      //           <img src="images/tick.png" alt="" />
      //           <img src="images/delete.png" alt="" />
      //           <img src="images/more.png" alt="" />
      //         </div>
      //         </div>
            
      //         <div className="text">
      //         {PostData.map((postDetail)=>{
      //            return <p>{postDetail.posts_by_date['2021-06-17']
      //              .map((firstPost, index)=>{
      //                 if(index == 1 ){
      //                   return <p>{firstPost.entry.message}</p>
      //                 }
                      
      //              })
      //            }</p>
      //          })}
      //         </div>
      //         <div className="image">
      //         {PostData.map((postDetail)=>{
      //            return <img src={postDetail.posts_by_date['2021-06-17']
      //            .map((firstPost, index)=>{
                
      //              console.log(index, firstPost.entry.image[0])
      //             if(index==0){
      //               return firstPost.entry.image                     
      //            }})
      //        }  ></img> 
                
      //          })}
      //         </div>
      //         <div className="social">
      //           <img src="images/heart.png" alt="" /><label>0</label>
      //           <img src="images/retweet.png" alt="" /><label>0</label>
      //           <img src="images/chat.png" alt="" /><label>0</label>
      //           <img src="images/look.png" alt="" /><label>0</label>
      //         </div>
      //       </div>
      //     </div>
          
      //     <div className="card">
      //       <div className="status">
      //         <img src="images/Card2.png" alt="" />
      //       </div>
      //       <div className="info">
      //         <div className="topsegment">
      //         <div className="date">
      //          {PostData.map((postDetail)=>{
      //            return <p>{postDetail.posts_by_date['2021-06-17']
      //              .map((firstPost, index)=>{
      //                 if(index == 1 ){
      //                   return <p>{firstPost.published_at}</p>
      //                 }
                      
      //              })
      //            }</p>
      //          })}
      //         </div>
      //         <div className="icons">
      //           <img src="images/tick.png" alt="" />
      //           <img src="images/delete.png" alt="" />
      //           <img src="images/more.png" alt="" />
      //         </div>
      //         </div>
            
      //         <div className="text">
      //         {PostData.map((postDetail)=>{
      //            return <p>{postDetail.posts_by_date['2021-06-17']
      //              .map((firstPost, index)=>{
      //                 if(index == 1 ){
      //                   return <p>{firstPost.entry.message}</p>
      //                 }
                      
      //              })
      //            }</p>
      //          })}
      //         </div>
      //         <div className="image">
      //         {PostData.map((postDetail)=>{
      //            return <img src={postDetail.posts_by_date['2021-06-17']
      //            .map((firstPost, index)=>{
                
      //              console.log(index, firstPost.entry.image[0])
      //             if(index==0){
      //               return firstPost.entry.image                     
      //            }})
      //        }  ></img> 
                
      //          })}
      //         </div>
      //         <div className="social">
      //           <img src="images/heart.png" alt="" /><label>0</label>
      //           <img src="images/retweet.png" alt="" /><label>0</label>
      //           <img src="images/chat.png" alt="" /><label>0</label>
      //           <img src="images/look.png" alt="" /><label>0</label>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="card">
      //       <div className="status">
      //         <img src="images/Card2.png" alt="" />
      //       </div>
      //       <div className="info">
      //         <div className="topsegment">
      //         <div className="date">
      //          {PostData.map((postDetail)=>{
      //            return <p>{postDetail.posts_by_date['2021-06-17']
      //              .map((firstPost, index)=>{
      //                 if(index == 1 ){
      //                   return <p>{firstPost.published_at}</p>
      //                 }
                      
      //              })
      //            }</p>
      //          })}
      //         </div>
      //         <div className="icons">
      //           <img src="images/tick.png" alt="" />
      //           <img src="images/delete.png" alt="" />
      //           <img src="images/more.png" alt="" />
      //         </div>
      //         </div>
            
      //         <div className="text">
      //         {PostData.map((postDetail)=>{
      //            return <p>{postDetail.posts_by_date['2021-06-17']
      //              .map((firstPost, index)=>{
      //                 if(index == 1 ){
      //                   return <p>{firstPost.entry.message}</p>
      //                 }
                      
      //              })
      //            }</p>
      //          })}
      //         </div>
      //         <div className="image">
      //         {PostData.map((postDetail)=>{
      //            return <img src={postDetail.posts_by_date['2021-06-17']
      //            .map((firstPost, index)=>{
                
      //              console.log(index, firstPost.entry.image[0])
      //             if(index==0){
      //               return firstPost.entry.image                     
      //            }})
      //        }  ></img> 
                
      //          })}
      //         </div>
      //         <div className="social">
      //           <img src="images/heart.png" alt="" /><label>0</label>
      //           <img src="images/retweet.png" alt="" /><label>0</label>
      //           <img src="images/chat.png" alt="" /><label>0</label>
      //           <img src="images/look.png" alt="" /><label>0</label>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="card">
      //       <div className="status">
      //         <img src="images/Card2.png" alt="" />
      //       </div>
      //       <div className="info">
      //         <div className="topsegment">
      //         <div className="date">
      //          {PostData.map((postDetail)=>{
      //            return <p>{postDetail.posts_by_date['2021-06-17']
      //              .map((firstPost, index)=>{
      //                 if(index == 1 ){
      //                   return <p>{firstPost.published_at}</p>
      //                 }
                      
      //              })
      //            }</p>
      //          })}
      //         </div>
      //         <div className="icons">
      //           <img src="images/tick.png" alt="" />
      //           <img src="images/delete.png" alt="" />
      //           <img src="images/more.png" alt="" />
      //         </div>
      //         </div>
            
      //         <div className="text">
      //         {PostData.map((postDetail)=>{
      //            return <p>{postDetail.posts_by_date['2021-06-17']
      //              .map((firstPost, index)=>{
      //                 if(index == 1 ){
      //                   return <p>{firstPost.entry.message}</p>
      //                 }
                      
      //              })
      //            }</p>
      //          })}
      //         </div>
      //         <div className="image">
      //         {PostData.map((postDetail)=>{
      //            return <img src={postDetail.posts_by_date['2021-06-17']
      //            .map((firstPost, index)=>{
                
      //              console.log(index, firstPost.entry.image[0])
      //             if(index==0){
      //               return firstPost.entry.image                     
      //            }})
      //        }  ></img> 
                
      //          })}
      //         </div>
      //         <div className="social">
      //           <img src="images/heart.png" alt="" /><label>0</label>
      //           <img src="images/retweet.png" alt="" /><label>0</label>
      //           <img src="images/chat.png" alt="" /><label>0</label>
      //           <img src="images/look.png" alt="" /><label>0</label>
      //         </div>
      //       </div>
      //     </div> 
    
    
   
  );
}
