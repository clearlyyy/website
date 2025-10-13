function About({ goToPage }) {
  return (
    <>
      <div className="Title">
        <h1 className="title-text">About Me</h1>
      </div>
      <h2 className="bio">
        Based in Canada, I grew up with computers and started programming at 16.
        I love diving deep into complex problems and finding elegant solutions
        that make a difference.
      </h2>

      <div className="Projects-Button" onClick={() => goToPage("Contact")}>
        <h2 className="button-text">Contact Me</h2>
      </div>
    </>
  );
}

export default About;
