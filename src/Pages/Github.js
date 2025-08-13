function Github() {
  return (
    <>
      <div className="Title">
        <h1 className="title-text">My GitHub</h1>
      </div>
      <h2 className="bio">
        Check out my GitHub profile to see what i'm working on.
      </h2>

      <div className="Projects-Button">
        <h2
          onClick={() => window.open("https://github.com/clearlyyy", "_blank")}
          className="button-text"
        >
          Visit GitHub
        </h2>
      </div>
    </>
  );
}

export default Github;
