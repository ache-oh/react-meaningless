import React, { useState } from "react";
import "../../style/Chtjd.css";

function ChtjdUpgrade() {
  // ring1
  const [ring1Animation, setRing1Animation] = useState("");
  const [ring1, setRing1] = useState("ring");

  // ring2
  const [ring2Animation, setRing2Animation] = useState("");
  const [ring2, setRing2] = useState("ring");

  // ring3
  const [ring3Animation, setRing3Animation] = useState("");
  const [ring3, setRing3] = useState("ring");

  const chtjd_list = [
    "ㄱ",
    "ㄴ",
    "ㄷ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅅ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  const SLOTS_PER_REEL = chtjd_list.length;
  const REEL_RADIUS = Math.round(
    (149 * Math.tan(Math.PI / 12)) / Math.tan(Math.PI / chtjd_list.length)
  );

  function shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }
  function getSeed() {
    return Math.floor(Math.random() * SLOTS_PER_REEL);
  }

  function spin() {
    const tempSeed1 = getSeed();
    const tempSeed2 = getSeed();
    const tempSeed3 = getSeed();

    setRing1Animation(
      "back-spin 1s, spin-" + tempSeed1 + " " + (2 + 1 * 0.5) + "s"
    );
    setRing1("ring spin-" + tempSeed1);
    setRing2Animation(
      "back-spin 1s, spin-" + tempSeed2 + " " + (2 + 2 * 0.5) + "s"
    );
    setRing2("ring spin-" + tempSeed2);
    setRing3Animation(
      "back-spin 1s, spin-" + tempSeed3 + " " + (2 + 3 * 0.5) + "s"
    );
    setRing3("ring spin-" + tempSeed3);
  }

  return (
    <body>
      <img className="chtjd-upgrade" />
      <div className="container">
        <h1 className="fifth">안동 초성 게임</h1>
      </div>
      <div className="container2">
        <div id="stage" className="perspective-on">
          <div id="rotate">
            <div
              className={ring1}
              style={{
                animation: ring1Animation,
              }}
            >
              {shuffle(chtjd_list).map((title: String, index: any) => {
                const SLOT_ANGLE = (360 / SLOTS_PER_REEL) * index;
                return (
                  <div
                    className="slot"
                    style={{
                      transform:
                        "rotateX(" +
                        SLOT_ANGLE +
                        "deg) translateZ(" +
                        REEL_RADIUS +
                        "px)",
                    }}
                  >
                    <p> {title} </p>
                  </div>
                );
              })}
            </div>
            <div
              className={ring2}
              style={{
                animation: ring2Animation,
              }}
            >
              {shuffle(chtjd_list).map((title: String, index: any) => {
                const SLOT_ANGLE: any = (360 / SLOTS_PER_REEL) * index;
                return (
                  <div
                    className="slot"
                    style={{
                      transform:
                        "rotateX(" +
                        SLOT_ANGLE +
                        "deg) translateZ(" +
                        REEL_RADIUS +
                        "px)",
                    }}
                  >
                    <p> {title} </p>
                  </div>
                );
              })}
            </div>
            <div
              className={ring3}
              style={{
                animation: ring3Animation,
              }}
            >
              {shuffle(chtjd_list).map((title: String, index: any) => {
                const SLOT_ANGLE = (360 / SLOTS_PER_REEL) * index;
                return (
                  <div
                    className="slot"
                    style={{
                      transform:
                        "rotateX(" +
                        SLOT_ANGLE +
                        "deg) translateZ(" +
                        REEL_RADIUS +
                        "px)",
                    }}
                  >
                    <p> {title} </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ padding: "150px 0px 0px 200px", zIndex: "999" }}>
            <button className="chtjd-button" onClick={spin}>
              <p className="fifth">GO</p>
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default ChtjdUpgrade;
