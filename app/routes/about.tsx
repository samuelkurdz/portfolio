import Avatar from "~/components/avatar";

export default function About() {
  return (
    <div className="mx-auto md:w-7/12">
      <div className="my-24">
        <Avatar className="mx-auto md:mx-0" />
      </div>
      <h1>Come Meet Me.</h1>

      <div className="mt-12 space-y-8">
        <p className="">
          Hello! I'm Samuel "Red" Adebayo. A Web Engineer. I'm passionate about
          the web and it's infinite possibilities. <s>I am not a designer.</s>
        </p>
        <p className="">
          In building Web applications, I'm equipped with just the right
          tools, and can absolutely function independently of them to deliver
          fast, resilient solutions optimized for scale — performance and
          scalabilty are priorities on my radar.
        </p>

        <p>
          I currently work as a Frontend Engineer for a company in Lagos, Nigeria.
        </p>

        <p>
          I enjoy good laughs so I watch a lot of sitcoms in my spare
          time, watch videos of musical intrumentalists in admiration even
          though I can't play any.
        </p>
      </div>
    </div>
  );
}
