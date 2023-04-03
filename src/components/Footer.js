import '../styles/Footer.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='meet-team'>
          <h4 className='meet-team'>Meet The Team</h4>
        </div>
        <div className='info-container'>
          <div className='persons-container'>
            <div className='img-container'>
              <img
                className='our-pics'
                src='https://avatars.githubusercontent.com/u/100313713?v=4'
                alt='linkedin-img'
                width={70}
                height={70}
              />
            </div>
            <p>Michael Kleyman</p>
            <div className='icons'>
              <Link
                to='https://github.com/MichaelKleyman'
                target='_blank'
                rel='noreferrer'
                className='github-icon'
              >
                <BsGithub size={28} />
              </Link>
              <Link
                to='https://www.linkedin.com/in/michael-kleyman/'
                target='_blank'
                rel='noreferrer'
                className='linkedin-icon'
              >
                <BsLinkedin size={28} />
              </Link>
            </div>
          </div>
          <div className='persons-container'>
            <div className='img-container'>
              <img
                className='our-pics'
                src='https://media.licdn.com/dms/image/D5603AQE-aUOO_9UrRw/profile-displayphoto-shrink_400_400/0/1678980254894?e=1686182400&v=beta&t=8KmO7_LqH3eD014WUkLqyAn39j0fm0UDOvfqP5t6DOQ'
                alt='linkedin-img'
                width={70}
                height={70}
              />
            </div>
            <p>Brandi Jefferson</p>
            <div className='icons'>
              <Link
                to='https://github.com/brandi-jeff'
                target='_blank'
                rel='noreferrer'
                className='github-icon'
              >
                <BsGithub size={28} />
              </Link>
              <Link
                to='https://www.linkedin.com/in/brandi-jefferson/'
                target='_blank'
                rel='noreferrer'
                className='linkedin-icon'
              >
                <BsLinkedin size={28} />
              </Link>
            </div>
          </div>
          <div className='persons-container'>
            <div className='img-container'>
              <img
                className='our-pics'
                src='https://avatars.githubusercontent.com/u/107938618?v=4'
                alt='linkedin-img'
                width={70}
                height={70}
              />
            </div>
            <p>Patrick Knight</p>
            <div className='icons'>
              <Link
                to='https://github.com/pfknight8'
                target='_blank'
                rel='noreferrer'
                className='github-icon'
              >
                <BsGithub size={28} />
              </Link>
              <Link
                to='https://www.linkedin.com/in/patrick-f-knight/'
                target='_blank'
                rel='noreferrer'
                className='linkedin-icon'
              >
                <BsLinkedin size={28} />
              </Link>
            </div>
          </div>
        </div>
        <p className='footer-bottom'>@ Team Quack Through The Cosmos 2023</p>
      </div>
    </div>
  );
};

export default Footer;
