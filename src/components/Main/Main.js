import React from 'react';
import { useState, useEffect } from 'react';
import PostData from '../data/data.json'
import './Main.css'
export default function Main() {
  
  return (
   
      <div className="containerMain">
        <div className="wrapper">
          <div className="card">
            <div className="status">
              <img src="images/Card.png" alt="" />
            </div>
            <div className="info">
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
            
              <div className="text">
              {PostData.map((postDetail)=>{
                 return <p>{postDetail.posts_by_date['2021-06-17']
                   .map((firstPost, index)=>{
                      if(index == 0 ){
                        return <p>{firstPost.entry.message}</p>
                      }
                      
                   })
                 }</p>
               })}
              </div>
              <div className="image">
              {PostData.map((postDetail)=>{
                 return <img src={postDetail.posts_by_date['2021-06-17']
                 .map((firstPost, index)=>{
                  if(index == 0 ){
                   return firstPost.entry.image
                  }
               })
             }  ></img> 
                
               })}
              </div>
              <div className="social">
                <img src="images/like.png" alt="" /><label>0</label>
                <img src="images/chat.png" alt="" /><label>0</label>
                <img src="images/share.png" alt="" /><label>0</label>
                <img src="images/look.png" alt="" /><label>0</label>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="status">
              <img src="images/Card2.png" alt="" />
            </div>
            <div className="info">
              <div className="topsegment">
              <div className="date">
               {PostData.map((postDetail)=>{
                 return <p>{postDetail.posts_by_date['2021-06-17']
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
            
              <div className="text">
              {PostData.map((postDetail)=>{
                 return <p>{postDetail.posts_by_date['2021-06-17']
                   .map((firstPost, index)=>{
                      if(index == 1 ){
                        return <p>{firstPost.entry.message}</p>
                      }
                      
                   })
                 }</p>
               })}
              </div>
              <div className="image">
              {PostData.map((postDetail)=>{
                 return <img src={postDetail.posts_by_date['2021-06-17']
                 .map((firstPost, index)=>{
                  
                   return firstPost.entry.image
                  
               })
             }  ></img> 
                
               })}
              </div>
              <div className="social">
                <img src="images/like.png" alt="" /><label>0</label>
                <img src="images/chat.png" alt="" /><label>0</label>
                <img src="images/share.png" alt="" /><label>0</label>
                <img src="images/look.png" alt="" /><label>0</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    
   
  );
}
