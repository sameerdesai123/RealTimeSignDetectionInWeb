import './Doc.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestOfLuck from './DocImages/BestOfLuck.jpg';
import Hello from './DocImages/Hello.jpg';
import Home from './DocImages/Home.jpg';
import ILoveYou from './DocImages/ILoveYou.jpg';
import More from './DocImages/More.jpg';
import Nice from './DocImages/Nice.jpg';
import No from './DocImages/No.jpg';
import Pray from './DocImages/Pray.jpg';
import Remember from './DocImages/Remember.jpg';
import ThankYou from './DocImages/ThankYou.jpg';
import VJIT from './DocImages/VJIT.jpg';

const Doc =  () => {
  return (
    <div className="Doc">
      
      <h1>About App</h1>
      <h4>Procedure</h4> 
      <div class="container">
                <div class="timeline">
                    <ul>
                        <li>
                            <div class="timeline-content">
                                <h6>Setup Path Contants</h6>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h6>Create Label Map</h6>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h6>Create TF Records</h6>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h6>Download TF Models Pretrained Models from Tensorflow Model Zoo</h6>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h6>Download ssd_mobilenet_v2_fpnlite_320x320_coco17_tpu-8.tar.gz</h6>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h6>Copy Model Config into training folder</h6>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h6>Update Config For Transfer Learning</h6>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h6>Train The Model</h6>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h6>Load Trained Model From Checkpointl</h6>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h6>Detect in Real-Time</h6>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h6>Install tensorflow.js to convert h5 to json (Done in VE tfjs)</h6>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h6>Upload the model to IBM Cloud Storage bucket</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            

        <h3>Symbols Used</h3> 

        <table className="content-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Meaning</th>
              <th>Symbol</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={BestOfLuck} alt="Best Of Luck" width="128" height="128"/>
              </td>
              <td>Best of Luck</td>
              <td>
                <img src={Hello} alt="Hello" width="128" height="128"/>
              </td>
              <td>Hello</td>
            </tr>
            <tr>
              <td>
                <img src={Home} alt="Home" width="128" height="128"/>
              </td>
              <td>Home</td>
              <td>
                <img src={ILoveYou} alt="I Love You" width="128" height="128"/>
              </td>
              <td>I Love You</td>
            </tr>
            <tr>
              <td>
                <img src={More} alt="More" width="128" height="128"/>
              </td>
              <td>More</td>
              <td>
                <img src={Nice} alt="Nice" width="128" height="128"/>
              </td>
              <td>Nice</td>
            </tr>
            <tr>
              <td>
                <img src={No} alt="No" width="128" height="128"/>
              </td>
              <td>No</td>
              <td>
                <img src={Pray} alt="Pray" width="128" height="128"/>
              </td>
              <td>Pray</td>
            </tr>
            <tr>
              <td>
                <img src={Remember} alt="Remember" width="128" height="128"/>
              </td>
              <td>Remember</td>
              <td>
                <img src={ThankYou} alt="Thank You" width="128" height="128"/>
              </td>
              <td>Thank You</td>
            </tr>
            <tr>
              <td>
                <img src={VJIT} alt="VJIT" width="128" height="128"/>
              </td>
              <td>Vidya Jyothi Institute of Techonology</td>
              <td></td>
              <td></td>
            </tr>
        </tbody>
        </table>

    </div>
  );
}

export default Doc;
