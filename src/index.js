import React from "react";
import { createRoot } from "react-dom/client";
import "../public/styles.css";

const root = createRoot(document.getElementById("root"));
const img = "https://picsum.photos/600/350";

root.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Games I play
    </h1>
    <div>
      <img
        src="https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/iQGgKYUg9YwjPVNM0kE8jeRN.jpg"
        alt="MW2"
        className="image-size"
      />
      <img
        src="https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_DeadIsland2_DeepSilverDambusterStudios_S1_2560x1440-fdc688ce46680914ee3c4a7949ce8a67"
        alt="DI2"
        className="image-size"
      />
      <img
        src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/23663702/F1_22_Baku_10_3840x2160.png"
        alt="F1"
        className="image-size"
      />
      <img src={img + "?grayscale"} alt="random pics" />
    </div>
  </div>
);
