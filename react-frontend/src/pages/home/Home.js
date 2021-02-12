import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import signImg from './assets/signs-img1.jpg'
import { NavLink } from "react-router-dom";

import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";

// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
import {drawRect} from "./utilities"; 
import { Spinner, Image } from 'react-bootstrap';

const Home = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [camStatus, setCamStatus] = useState(true)
  const [loaderStatus, setLoaderStatus] = useState(true)

  // For Starting and stopping cam window
  const startCam = () => setCamStatus(true)
  const stopCam = () => setCamStatus(false)

  // For setting the loader
  const startLoader = () => setLoaderStatus(true)
  const stopLoader = () => setLoaderStatus(false)

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    // e.g. const net = await cocossd.load();
    
    // https://tfjs-real-time-model-sign-detection.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json
    
    // FOR REF https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json
    
    const net = await tf.loadGraphModel('https://tfjs-real-time-model-sign-detection.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json')
     // setNetState(net)
    // stopLoader()
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (typeof webcamRef.current === "undefined" || webcamRef.current !== null) {
        startLoader()      
    }
    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
      // Get Video Properties

      stopLoader()
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
      console.log(obj)

      try{
        const boxes = await obj[5].array()
        const classes = await obj[2].array()
        const scores = await obj[6].array()
        
        
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
        requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.75, videoWidth, videoHeight, ctx)}); 
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
            <div className="row mt-2 shadow-lg p-1 mb-1 bg-white rounded">
              <div className="col-sm-8 float-left border-right mt-1 br-3 bg-white rounded">

                <div className="float-left w-100">

                    <div className="justify-content-center pb-3">
                      {
                        camStatus ? 
                        <div className="display-4 bold">
                          Live Webcam
                          <div className="float-right">
                          <button onClick={startCam} type="button" className="btn btn-outline-success">Start</button>&nbsp;
                          <button onClick={stopCam} type="button" className="btn btn-outline-danger">Stop</button>
                        </div>
                        </div> 
                        :
                        <div className="display-4 bold">
                          Sign Language Recognition
                          <div className="float-right">
                          <button type="button" className="btn btn-outline">
                            <NavLink to="/doc" activeClassName="font-weight-light p-3">View Documentation</NavLink>
                          </button>
                        </div>
                        </div> 
                      } 
                    </div>  
                  <div className="justify-content-center w-100">
                    {
                      loaderStatus? <Spinner animation="border" variant="primary" /> : null
                    }
                   
                   {
                     camStatus? 
                     <div className="b-1">
                      <Webcam
                        className="pl-5 pr-3 pt-4 pb-4 bg-white rounded"
                        ref={webcamRef}
                        muted={true} 
                        style={{
                          position: "relative",
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
                   : loaderStatus ? <Spinner animation="border" variant="primary" /> :
                   <Image src={signImg} alt="sign image" className="pl-5 pr-3 pt-4 pb-4 bg-white rounded"></Image>
                   }

                  </div>
                </div>

              </div>
              <div className="col-sm-4 float-right">

              <div className="float-left w-100">
                <div className="display-4">
                  Prediction 
                  <div className="float-right">
                    <button type="button" className="btn btn-outline-primary">Predict</button>
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
