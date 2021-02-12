import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { nextFrame } from "@tensorflow/tfjs";

// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
import {drawRect} from "./utilities"; 
import { Container } from 'react-bootstrap';

const Home = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    // e.g. const net = await cocossd.load();
    
    // https://tfjs-real-time-model-sign-detection.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json
    
    // FOR REF https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json
    const net = await tf.loadGraphModel('https://tfjs-real-time-model-sign-detection.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json')
    
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 20);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      // console.log(obj)

      try{
        const boxes = await obj[0].array()
        const classes = await obj[1].array()
        const scores = await obj[3].array()
        
        
        // let i = 0;
        // for(i=0;i<8;i++) {
        //   var temp = await obj[i].array();
        //   console.log("Index: ", i, temp[0]);
        //   console.log();
        // }
        // console.log(scores);
        
        
        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
          // 5. TODO - Update drawing utility
        // drawSomething(obj, ctx)  
        requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.7, videoWidth, videoHeight, ctx)}); 
        // await nextFrame()
        tf.dispose(img)
        tf.dispose(resized)
        tf.dispose(casted)
        tf.dispose(expanded)
        tf.dispose(obj)
      }catch(e){
        tf.dispose(img)
        tf.dispose(resized)
        tf.dispose(casted)
        tf.dispose(expanded)
        tf.dispose(obj)
      }

    }
  };

  useEffect(()=>{runCoco()});

  return (
    <div >
     <section className="main">
          <div className="container">
            <div className="row mt-5">
              <div className="col-sm-8 float-left border-right mt-1 br-3">

                <div className="float-left w-100">

                    <div className="display-4 justify-content-center">
                      Live Webcam
                      <div className="float-right">
                      <button onclick="start()" type="button" className="btn btn-outline-success">Start</button>&nbsp;
                      <button onclick="stop()" type="button" className="btn btn-outline-danger">Stop</button>
                    </div>
                    </div>  
                  <div className="justify-content-center w-100">
                    <div className="b-1">
                          <Webcam
                            className="mt-2"
                            ref={webcamRef}
                            muted={true} 
                            style={{
                              position: "absolute",
                              marginLeft: "auto",
                              marginRight: "auto",
                              marginTop: "auto",
                              left: 0,
                              right: 0,
                              textAlign: "center",
                              zindex: 9,
                              width: 640,
                              height: 480,
                            }}
                          />

                          <canvas
                            ref={canvasRef}
                            style={{
                              position: "absolute",
                              marginLeft: "auto",
                              marginRight: "auto",
                              marginTop: "auto",
                              left: 0,
                              right: 0,
                              textAlign: "center",
                              zindex: 8,
                              width: 640,
                              height: 480,
                            }}
                          />
                        </div>

                  </div>
                </div>

              </div>
              <div className="col-sm-4 float-right">

              <div className="float-left w-100">
                <div className="display-4">
                  Prediction 
                  <div className="float-right">
                    <button onclick="predict()" type="button" className="btn btn-outline-primary">Predict</button>
                  </div>
                </div>
                <div className="mt-5">
                  <p>Detected Class : </p>
                  <p>Detected Class : </p>
                  <p>Detected Class : </p>
                  <p>Detected Class : </p>
                  <p>Detected Class : </p>
                </div>
              </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Home;
