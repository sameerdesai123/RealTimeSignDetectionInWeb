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
    
      <h3>Procedure</h3> 

      <p><b>Prerequisits:</b>
      <br></br>Install Anaconda3-2019.07 <a href={'https://www.anaconda.com/products/individual'}>Download</a>
      <br></br>Install C++ Build tools <a href={'https://visualstudio.microsoft.com/vs/community/'}>Download</a>
      <br></br>Install protoc library <a href={'https://github.com/protocolbuffers/protobuf/releases'}>Download</a>
      </p>

      <p><b>Setting up environment: </b>
      <br></br>
      Go inside models/research
      <br></br>Run "protoc object_detection/protos/*.proto --python_out=."
      <br></br>Run "cp object_detection/packages/tf2/setup.py ."
      <br></br>Run "python -m pip install ."
      </p>
      

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
              <td>Vidya Jyothi Institute<br></br>of Techonology</td>
              <td></td>
              <td></td>
            </tr>
        </tbody>
        </table>

    </div>
  );
}

export default Doc;
