import React from "react"
import "papercss"

function Footer() {
  return (
    <div class="border igem-footer">
      <div class="row flex-center">
        <div class="sm-3 col">
          <h3>About</h3>
          <a href="https://www.nju.edu.cn/main.htm"><p>Nanjing University Official Website</p></a>
          <a href="https://github.com/OrangeX4/NJU-igem-2022-wiki"><p>Site Repository On GitHub</p></a>
        </div>
        <div class="sm-3 col">
          <h3>Contact Us</h3>
          <p>Nanjing University, 163 Xianlin Road, Jiangsu, China</p>
          <a href="mailto:igem_nju_china@163.com"><p>igem_nju_china@163.com</p></a>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>©2022 NJU-China iGEM Team All Rights Reserved.</p>
    </div>
  )
}

export default Footer