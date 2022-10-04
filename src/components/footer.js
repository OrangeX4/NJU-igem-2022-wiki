import React from "react"
import "papercss"

function Footer() {
  return (
    <div className="border igem-footer">
      <div className="row flex-center">
        <div className="sm-6 col" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <img style={{border: "none"}} alt='footer' src="https://static.igem.wiki/teams/4173/wiki/wiki/footer2.png"></img>
        </div>
        <div className="sm-3 col">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:yqh181@qq.com">yqh181@qq.com</a></p>
          <p>Address: Nanjing University, No. 163, Xianlin  Avenue, Nanjing, Jiangsu Province, China</p>
          <p>Bilibili: <a href="https://www.bilibili.com/video/BV1od4y1G7Wd/">NJU-China</a></p>
          <p>GitHub: <a href="https://github.com/OrangeX4/NJU-igem-2022-wiki">NJU-igem-2022-wiki</a></p>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>©2022 NJU-China iGEM Team All Rights Reserved.</p>
    </div>
  )
}

export default Footer