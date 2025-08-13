function Home({goToPage}) {
  return (
    <>
      <div className="Title">
        <h1 className="title-text">Hey, I'm Clearly</h1>
      </div>
      <h2 className="bio">
        I'm a Software Engineer who loves building things, learning new
        technologies, and solving complex problems. Check out some of my
        projects.
      </h2>

      <div onClick={() => goToPage("Projects")} className="Projects-Button">
        <h2 className="button-text">Projects</h2>
      </div>
    </>
  );
}

export default Home;
