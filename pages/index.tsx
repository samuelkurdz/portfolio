import Avatar from '../components/Avatar';
import SocialMedia from '../components/SocialMedia';
import ThemeSvg from '../components/ThemeSvg';

function Homepage(): JSX.Element {
  return (
    <div className="mt-12 mx-auto md:w-10/12 w-10/12 text-center">
      <Avatar />
      <ThemeSvg />
      <h1 className="mt-3 mb-6 font-black tracking-tight text-3xl lg:text-6xl text-primary">
        Samuel Adebayo
      </h1>

      <div className="space-y-3 text-xl">
        <p>Hello, I’m a Software Engineer!</p>
        <p>I am currently building this Blog</p>
        <p>
          <span role="img" aria-label="builder and tools">
            👲🛠
          </span>
        </p>
        {/* <a href="https://linkedin.com/in/sambayo">Linkedin</a> */}
        <SocialMedia />
      </div>
    </div>
  );
}

export default Homepage;
