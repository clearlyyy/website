function Github() {
  return (
    <div className="about-page">
      <h1>Github</h1>
      <p>You can find some of my work <a href="/projects">here</a></p>
      <p>Or go to my Github to see what im up to!</p>
      <div class="github-button" onClick={() => window.location.href = "https://github.com/clearlyyy"}>Github <img src="/imgs/github.svg" className="github-logo"/></div>
    </div>
  );
}

export default Github;