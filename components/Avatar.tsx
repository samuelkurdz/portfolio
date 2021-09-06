// import CSS from 'csstype';

// const imgStyle: CSS.Properties = {
// 	// filter: 'grayscale(1)',
// };

function Avatar() {
  return (
    <div className="w-40 h-40 mx-auto rounded-full p-1 border-4 border-primary">
      <img
        src="/sam.jpg"
        // style={imgStyle}
        className="md:mx-auto rounded-full"
        alt="me"
      />
    </div>
  );
}

export default Avatar;
