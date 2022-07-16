import './sublist.scss'
import {motion} from 'framer-motion'
import img from '../../assets/image2.png'
import {FaCloudDownloadAlt} from 'react-icons/fa'

function Sublist() {
  return (
      <div className="sublist global-padding">
          <motion.div initial={{x:-300,opacity:0}} whileInView={{x:0,opacity:1}} className="sublist-img">
              <img src={img} alt="img" />
          </motion.div>
          <div className="sublist-details">
              <h3>Sub list section</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi veniam error porro quas voluptates nobis unde nam optio quos.</p>
              <motion.div initial={{x:300,opacity:0}} whileInView={{x:0,opacity:1}} className="description">
                  <div className="icon">
                    <FaCloudDownloadAlt className='icon-font'/>
                  </div>
                  <div className="title">
                      <h5>Title</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum!dolor sit amet consectetur adipisicing elit. Facere, cum</p>
                  </div>
              </motion.div>
              <motion.div initial={{x:-300,opacity:0}} whileInView={{x:0,opacity:1}} className="description">
                  <div className="icon">
                    <FaCloudDownloadAlt className='icon-font'/>
                  </div>
                  <div className="title">
                      <h5>Title</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, atque! Necessitatibus eos rerum quasi inventore! </p>
                  </div>
              </motion.div>
          </div>
    </div>
  )
}

export default Sublist