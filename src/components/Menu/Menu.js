import React from 'react'
import "./Menu.css"
import Main from '../Main/Main'
import { css } from "@emotion/react";

const override = css`
    color: #F55661;`;

function Menu() {
    return (

            <div className="container">
		 <nav className="menu">
        <ul>
				<input type="radio" name="menu" id="archive"  />
				<li>
					<label htmlFor="archive" className="title" onClick={override}><img src="images/icon1.png" alt="" />  NOTIFICATIONS</label>
					<a href="#">New File</a>
					<a href="#">Open File</a>
					<a href="#">Save As...</a>
					<a href="#">Exit</a>
				</li>
				<input type="radio" name="menu" id="edit"/>
				<li>
					<label htmlFor="edit" className="title" onClick={override}><img src="images/icon2.png" alt="" /> SUMMARY</label>
					<a href="#">Copy</a>
					<a href="#">Cut</a>
					<a href="#">Paste</a>
					<a href="#">Undo</a>
				</li>
				<input type="radio" name="menu" id="tools" checked/>
				<li>
					<label htmlFor="tools" className="title" onClick={override}><img src="images/icon3.png" alt="" /> PUBLISH</label>
					<a href="#">Compose</a>
					<a href="#">Report</a>
				
				</li>
				<input type="radio" name="menu" id="preferences"/>
				<li>
					<label htmlFor="preferences" className="title" onClick={override}> <img src="images/icon4.png" alt="" /> ENGAGE</label>
					<a href="#">Browser</a>
					<a href="#">Settings</a>
					<a href="#">Packages</a>
					<a href="#">Theme</a>
				</li>
                <li>
					<label htmlFor="preferences" className="title" onClick={override}><img src="images/icon5.png" alt="" /> LISTEN</label>
					<a href="#">Browser</a>
					<a href="#">Settings</a>
					<a href="#">Packages</a>
					<a href="#">Theme</a>
				</li>
                <li>
					<label htmlFor="preferences" className="title" onClick={override}><img src="images/icon6.png" alt="" /> REPORT</label>
					<a href="#">Browser</a>
					<a href="#">Settings</a>
					<a href="#">Packages</a>
					<a href="#">Theme</a>
				</li>
			</ul>
		</nav> 
			<Main/>
	        </div>
        
    )
}

export default Menu
