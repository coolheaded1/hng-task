import "./App.css";
import photo from "./assets/picture.jpg";
import slack from "./assets/slack.png";
import icon from "./assets/Icon.png";
import I4G from "./assets/I4G.png";
import Vector from "./assets/Vector.png";

function App() {
   return (
      <div className="App">
         <div className="row">
            <div className="col-md-2 col-12"></div>
            <div className="col-12 col-md-8">
               <div className="box m-auto p-3">
                  <div className="d-flex justify-content-center">
                     <img
                        src={photo}
                        className="image_style "
                        alt="Profile icon"
                        if="profile__img"
                     />
                  </div>
                  <p className="fw-bold mt-3 text-center">Samuel Joseph</p>

                  <a
                     href="https://www.twitter.com/coolheaded8"
                     className="btn my_btn"
                     id="twitter"
                  >
                     Twitter Link
                  </a>

                  <a
                     href="https://training.zuri.team/"
                     className="btn my_btn"
                     id="btn__zuri"
                  >
                     Zuri Team
                  </a>

                  <a
                     href="https://books.zuri.team/"
                     className="btn my_btn"
                     id="books"
                  >
                     Zuri Books
                  </a>

                  <a
                     href="https://books.zuri.team/"
                     className="btn my_btn"
                     id="book__python"
                  >
                     Python Books
                  </a>

                  <a
                     href="https://background.zuri.team/"
                     className="btn my_btn"
                     id="pitch"
                  >
                     Background Check for Coders
                  </a>

                  <a
                     href="https://books.zuri.team/design-rules"
                     className="btn my_btn"
                     id="book__design"
                  >
                     Design Books
                  </a>

                  <div className="mt-5 d-flex justify-content-center">
                     <a href="https://hng9.slack.com">
                        <img
                           src={slack}
                           className="icon_style"
                           alt="slack icon"
                        />
                     </a>
                     <a href="https://github.com/coolheaded1">
                        <img
                           src={icon}
                           className="icon_style"
                           alt="github icon"
                        />
                     </a>
                  </div>

                  <div className="__row mb-3" />
                  <div className="row ">
                     <div className="col-md-3 col-12 mb-3">
                        <img
                           src={Vector}
                           className="icon_style2"
                           alt="slack icon"
                        />
                     </div>
                     <div className="col-md-6 col-12 mb-3">
                        <span className="txt">
                           HNG Internship 9 Frontend Task
                        </span>
                     </div>
                     <div className="col-md-3 col-12">
                        <img
                           src={I4G}
                           className="icon_style2"
                           alt="slack icon"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-12 col-md-2"></div>
         </div>
      </div>
   );
}

export default App;
